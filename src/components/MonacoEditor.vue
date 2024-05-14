<template>
  <div ref="editorContainer" class="editor-container"></div>
</template>

<script>
import loader from "@monaco-editor/loader";
import GramatikaLexer from './parser/gramatikaLexer';
import GramatikaParser from './parser/gramatikaParser';
import CustomListener from './parser/customListener';
import { CommonTokenStream, InputStream } from 'antlr4';
import antlr4 from 'antlr4';
export default {
  name: "MonacoEditor",
  props: {
    value: String,
    fontSize: Number,
    readonly: false
  },
  watch: {
    fontSize(newSize) {
      if (this.editor) {
        this.editor.updateOptions({ fontSize: newSize });
      }
    },
    value(newValue){
      if(this.editor){
        this.editor.setValue(newValue);
      }
    }
  },
   mounted() {
    loader.init().then((monaco) => {
      monaco.languages.register({ id: 'myCustomLanguage' });

      monaco.languages.setMonarchTokensProvider('myCustomLanguage', {
        tokenizer: {
          root: [
          [/\b(while|if|then|else|do|skip)\b/, 'modra'],
          [/[:=\*\+\-<≤!¬]/, 'cervena'],
          ]
        }
      });

      monaco.editor.defineTheme('myTheme', {
        base: 'vs',
        inherit: true,
        rules: [
          { token: 'modra', foreground: '#1867c0' }, 
          { token: 'cervena', foreground: '#FF0000'}
        ],
        colors: {
          'editor.lineHighlightBackground': '#B2EBF2',
        }
      });
      this.editor = monaco.editor.create(this.$refs.editorContainer, {
        value: this.value,
        language: "myCustomLanguage",
        theme: "myTheme", 
        fontSize: this.fontSize,
        minimap: {
          enabled: false
        },
        readOnly: this.readonly
      });
      window.addEventListener('resize', this.resizeEditor);
      this.editor.onDidChangeModelContent(() => {
        this.$emit('update:value', this.editor.getValue());
        this.handleEditorChange(); 
      });
    });
  },
  beforeUnmount() {
    if (this.editor) {
      this.editor.dispose();
      window.removeEventListener('resize', this.resizeEditor);
    }
  },
  methods: {
    resizeEditor() {
      if (this.editor) {
        this.editor.layout();
      }
    },
    handleEditorChange() {
      try {
        const content = this.editor.getValue().trim();
        if (!content) {
          monaco.editor.setModelMarkers(this.editor.getModel(), 'owner', []);
          return; 
        }
        
        const input = new antlr4.InputStream(content);
        const lexer = new GramatikaLexer(input);
        const tokens = new CommonTokenStream(lexer);
        const parser = new GramatikaParser(tokens);
        let syntaxErrors = [];
        
        const errorListener = {
          syntaxError: (recognizer, offendingSymbol, line, column, msg, e) => {
            syntaxErrors.push({ line, column, msg });
          }
        };
        
        parser.removeErrorListeners();
        lexer.removeErrorListeners();
        parser.addErrorListener(errorListener);
        const tree = parser.program();
        const modelMarkers = syntaxErrors.map(error => ({
          startLineNumber: error.line,
          startColumn: error.column + 1,
          endLineNumber: error.line,
          endColumn: error.column + 2,
          message: error.msg,
          severity: monaco.MarkerSeverity.Error,
        }));
        
        monaco.editor.setModelMarkers(this.editor.getModel(), 'owner', modelMarkers);

        if (syntaxErrors.length === 0) {
          const listener = new CustomListener();
          antlr4.tree.ParseTreeWalker.DEFAULT.walk(listener, tree);
          const result = listener.getCelyPreklad();
          const druhyPreklad = listener.getDruhyKrok();
          this.$emit('update:ast', result);
          this.$emit('update:druhyKrok', druhyPreklad);
        } else {
          this.$emit('update:ast', null);
        }
      } catch (error) {
        this.$emit('update:ast', null);
      }
    }


}

};
</script>

<style>
.editor-container {
  height: 500px;
  border: 1px solid black;
}
</style>