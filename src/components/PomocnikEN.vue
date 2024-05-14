<template>
    <v-dialog  style="max-width: 80%; max-height: 90%;">
        <v-card>
          <v-card-title>
            <v-row>
              <v-col cols="12" md="4">
                <v-btn block @click="content = 'content1'">General</v-btn>
              </v-col>
              <v-col cols="12" md="4">
                <v-btn block @click="content = 'content2'">Abstract <br v-if="screenWidth <= 400"> implementation</v-btn>
              </v-col>
              <v-col cols="12" md="4">
                <v-btn block @click="content = 'content3'">Grammar</v-btn>
              </v-col>
            </v-row>
          </v-card-title>
  
        <v-card-text >
          <div v-if="content === 'content1'" class="text-left">
            <v-row>
              <v-col cols="12" md="5" class="test">
                <v-btn variant="elevated" class="spustit">Visualize <v-icon>mdi-play</v-icon></v-btn>
              </v-col>
              <v-col cols="12" md="7" class="justify-center">When the button is pressed, the translation of the program in the abstract implementation is displayed</v-col>
            </v-row>
            <v-divider style="margin: 20px 0px;"></v-divider>
            <v-row>
              <v-col cols="12" md="5" class="test">
                <v-btn>18px<v-icon right color="info">mdi-chevron-down</v-icon></v-btn>
              </v-col>
              <v-col cols="12" md="7" class="justify-center">Dropdown menu to set the font size in the editor</v-col>
            </v-row>
            <v-divider style="margin: 20px 0px;"></v-divider>
            <v-row>
              <v-col cols="12" md="5">
                <v-row>
                  <v-col class="formular" cols="12" >
                    <v-combobox
                    label="Name"
                    outlined
                    :return-object="false"
                    style="max-width: 200px;"
                  ></v-combobox>
                  </v-col>
                  <v-col class="formular" cols="12" >
                    <v-combobox
                    label="Value"
                    outlined
                    :return-object="false"
                    style="max-width: 200px;"
                  ></v-combobox>
                  </v-col> 
                  <v-col class="formular" cols="12">
                    <v-btn color="primary" disabled>Set variable</v-btn>
                  </v-col>
                </v-row>
              </v-col>
              <v-col cols="12" md="5" class="justify-center">Form through which the values of variables in the initial state can be set s<sub>0</sub></v-col>
            </v-row>
            <v-divider style="margin: 20px 0px;"></v-divider>
            <v-row>
              <v-col cols="12" md="5" class="test">
                <v-btn variant="elevated" >Paste Example</v-btn>
              </v-col>
              <v-col cols="12" md="7" class="justify-center">
                When the button is pressed, the example code is loaded into the editor and the initial value of the variables is set so that the translation of the program can be started immediately.
              </v-col>
            </v-row>
            <v-divider style="margin: 20px 0px;"></v-divider>
            <v-row>
              <v-col cols="12" md="5" class="test">
                <v-btn variant="elevated" >Upload Program<v-icon color="info">mdi-upload</v-icon></v-btn>
              </v-col>
              <v-col cols="12" md="7" class="justify-center">
                With this button you can upload the code from a .txt file.
              </v-col>
            </v-row>
            <v-divider style="margin: 20px 0px;"></v-divider>
            <v-row>
              <v-col cols="12" md="5" class="test">
                <v-btn variant="elevated">EXPORT</v-btn>
              </v-col>
              <v-col cols="12" md="7" class="justify-center">
                Allows you to export the abstract implementation to a .png image. It also prints the result in latex.
              </v-col>
            </v-row>
            <v-divider style="margin: 20px 0px;"></v-divider>
            <v-row>
              <v-col cols="12" md="5" class="test">
                <v-btn color="primary" >Code Translation
                  <v-icon right>mdi-chevron-down
                  </v-icon>
                </v-btn>
              </v-col>
              <v-col cols="12" md="7" class="justify-center">
                Selection menu, from which the user can choose whether he wants to have the translation of the program into abstract machine instructions displayed on the output.
              </v-col>
            </v-row>
            <v-divider style="margin: 20px 0px;"></v-divider>
            <v-row>
              <v-col cols="12" md="5" class="test">
                <v-row style="margin: 0;">
                  <v-btn variant="elevated"  style="margin-right: 10px;">Whole sequence</v-btn>
                  <v-btn variant="elevated" :style="screenWidth <= 416? 'margin-top:10px;' : 'margin-top:0px;'">Step by step</v-btn>
                </v-row>
              </v-col>
              <v-col cols="12" md="7" class="justify-center">
                With these buttons you can switch between two forms of output. If you are in "Whole sequence", you will see the full result with all steps. However, if you are in "Step by step", you will be shown the steps one by one.
              </v-col>
            </v-row>
            <v-divider style="margin: 20px 0px;"></v-divider>
            <v-row>
              <v-col cols="12" md="5" class="test">
                <v-row style="margin: 0;">
                  <v-btn variant="tonal" style="margin-right: 10px;">Previous <v-icon color="info">mdi-chevron-left</v-icon></v-btn>
                  <v-btn variant="tonal">Next <v-icon color="info">mdi-chevron-right</v-icon></v-btn>
                </v-row>
              </v-col>
              <v-col cols="12" md="7" class="justify-center">
                These buttons will be displayed if you clicked in "Step by step" and you can switch between the steps with these buttons. The "Previous" button moves to the previous step, the "Next" button moves to the next step.
              </v-col>
            </v-row>
            <v-divider style="margin:20px 0px;"></v-divider>
            <v-row >
              <v-col cols="12" md="5" class="test">
                <v-btn variant="elevated" style="padding: 5px;" :style="screenWidth <= 450 ? 'padding: 10px 50px 40px 50px;' : 'padding: 5px;'">Guess next <br v-if="screenWidth <= 450"> configuration</v-btn>
              </v-col>
              <v-col cols="12" md="7" class="justify-center">
                Displays a form that allows the user to guess what the next configuration will look like.
              </v-col>
            </v-row>
          </div>
          <div v-if="content === 'content2'" class="text-center">
            <v-card style="padding: 0px 10% 10px; margin-bottom: 10px;">
              <span>The cofiguration of the abstract machine has a shape:</span>
              <latex :latex-string="abstraktnaImplementacia"/>
              <span>where the code (marked as  </span>
              <span class="font-italic">c</span>
              <span>) is a sequence of instructions that the machine executes. The stack (marked as   </span>
              <span class="font-italic">st</span>
              <span>) is used to evaluate expressions and intermediate results, while the machine memory (denoted as </span>
              <span class="font-italic">s</span>
              <span>) maintains status information necessary for proper machine function.</span>
            </v-card >
            <v-card style="padding: 0px 10% 10px; margin-bottom: 10px; overflow-x: auto;">
              <v-card-title class="text-h6">Definition of translation functions of expressions</v-card-title>
              <span>We define the translation of arithmetic expressions by a translation function:</span>
              <latex :latex-string="aritmetickeVyrazyHlava"/>
              <span>for individual forms of arithmetic expressions:</span>
              <latex :latex-string="aritmetickeVyrazy"/>
              <span>We define the translation of Boolean expressions by a translation function:</span>
              <latex :latex-string="boolovskeVyrazyHlava"/>
              <span>for individual forms of Boolean expressions:</span>
              <latex :latex-string="boolovskeVyrazy"/>
              <span>Preklad príkazov definujeme prekladovou funkciou:</span>
              <latex :latex-string="prikazyHlava"/>
              <span>We define the translation of commands by a translation function:</span>
              <latex :latex-string="prikazy"/>
            </v-card>
            <v-card class="text-left" style="padding: 0px 10% 10px; overflow-x: auto;">
              <v-card-title class="text-h6 text-center">Semantics of abstract machine instructions</v-card-title>
              <span>The instruction <latex :latex-string="'\\textbf{PUSH} - n'" style="display: inline-block;"></latex> takes the value of the number <latex :latex-string="'n'" style="display: inline-block;"></latex> and puts it on top of the stack:</span>
              <latex :latex-string="push"/>

              <span>The instructions <latex :latex-string="'\\textbf{ADD, MULT, SUB, EQ, LE}'" style="display: inline-block;"></latex> expect two numeric values to be at the top of the stack. When instructions <latex :latex-string="'\\textbf{ADD, MULT}'" style="display: inline-block;"></latex> and <latex :latex-string="'\\textbf{SUB}'" style="display: inline-block;"></latex> are executed, the two numeric values are removed from the stack and the result of the operation is written to the top of the stack:</span>
              <latex :latex-string="add"/>
              <latex :latex-string="mult"/>
              <latex :latex-string="sub"/>

              <span>After the instruction <latex :latex-string="'\\textbf{EQ}'" style="display: inline-block;"></latex> compares two numeric values, it removes them from the stack and writes the truth value of the equality relation on top:</span>
              <latex :latex-string="eq"/>

              <span>The instruction <latex :latex-string="'\\textbf{LE}'" style="display: inline-block;"></latex> compares the two values at the top of the stack, removes them, and writes the truth value of the inequality to the top of the stack:</span>
              <latex :latex-string="le"/>
              <span>The instructions <latex :latex-string="'\\textbf{TRUE}'" style="display: inline-block;"></latex> and  <latex :latex-string="'\\textbf{FALSE}'" style="display: inline-block;"></latex> place a truth value at the top of the stack <latex :latex-string="'\\textbf{tt}'" style="display: inline-block;"></latex> or <latex :latex-string="'\\textbf{ff}'" style="display: inline-block;"></latex>:</span>
              <latex :latex-string="True"/>
              <latex :latex-string="False"/>

              <span>The instruction <latex :latex-string="'\\textbf{AND}'" style="display: inline-block;"></latex> expects two truth values at the top of the stack <latex :latex-string="'t_1'" style="display: inline-block;"></latex> and <latex :latex-string="'t_2'" style="display: inline-block;"></latex>, performs their conjugation, removes them and the resulting truth value <latex :latex-string="'\\textbf{tt}'" style="display: inline-block;"></latex> or <latex :latex-string="'\\textbf{ff}'" style="display: inline-block;"></latex> is placed on top of the tray:</span>
              <latex :latex-string="and"/>

              <span>The instruction <latex :latex-string="'\\textbf{NEG}'" style="display: inline-block;"></latex> expects a truth value at the top of the stack, which it removes and writes the negation of the truth value at the top:</span>
              <latex :latex-string="neg"/>

              <span>The instruction <latex :latex-string="'\\textbf{FETCH} - x'" style="display: inline-block;"></latex> takes the value of the variable  <latex :latex-string="'x'" style="display: inline-block;"></latex> in the given state and puts it on top of the stack:</span>
              <latex :latex-string="fetch"/>
              
              <span>The instruction <latex :latex-string="'\\textbf{STORE} - x'" style="display: inline-block;"></latex> takes the value from the top of the stack <latex :latex-string="'(v)'" style="display: inline-block;"></latex>which assumes it is a numeric value and assigns it to the variable <latex :latex-string="'x'" style="display: inline-block;"></latex>:</span>
              <latex :latex-string="store"/>
              
              <span>The instruction <latex :latex-string="'\\textbf{BRANCH}(c_1,c_2)'" style="display: inline-block;"></latex> expects a truth value at the top of the stack <latex :latex-string="'(t)'" style="display: inline-block;"></latex>, according to which it performs the branching of the program. Thus, if the truth value is true it executes the code  <latex :latex-string="'c_1'" style="display: inline-block;"></latex> and if false it executes the code <latex :latex-string="'c_2'" style="display: inline-block;"></latex>:</span>
              <latex :latex-string="branch"/>
              
              <span>The instruction <latex :latex-string="'\\textbf{LOOP}(c_1,c_2)'" style="display: inline-block;"></latex> executes the code <latex :latex-string="'c_1'" style="display: inline-block;"></latex> and then executes the instruction <latex :latex-string="'\\textbf{BRANCH}'" style="display: inline-block;"></latex>:</span>
              <latex :latex-string="loop"/>
              
              <span>The instruction <latex :latex-string="'\\textbf{EMPTYOP}'" style="display: inline-block;"></latex> is an empty instruction that changes neither the stack nor the state:</span>
              <latex :latex-string="emptyop"/>
            </v-card>
          </div>
          <div v-if="content === 'content3'" class="text-left">
            <v-card>
              <span class="ma-5">
                Variables in the Jane language are defined:
              </span>
              <MonacoEditor style="max-height: 40px; margin: 20px;" :font-size="18" :readonly="true" :value="fixedContent1"/>
              <span class="ma-5">
                Each instruction should end with a semicolon ( ; ), except for the last instruction in the block. Example:
              </span>
              <MonacoEditor style="max-height: 160px; margin: 20px;" :font-size="18" :readonly="true" :value="fixedContent2"/>
              <span class="ma-5">In this example we used the instruction <span class="font-weight-bold">if</span> with <span class="font-weight-bold">else</span> and <span class="font-weight-bold">then</span> instructions. The Instruction <span class="font-weight-bold">else</span> is always required after instruction <span class="font-weight-bold">if</span>:</span>
              <MonacoEditor style="max-height: 160px; margin: 20px;" :font-size="18" :readonly="true" :value="fixedContent3"/>
              <span class="ma-5">
                If you have only one instruction in the body of the cycle, you can omit the parentheses: 
              </span>
              <MonacoEditor style="max-height: 40px; margin: 20px;" :font-size="18" :readonly="true" :value="fixedContent4"/>
            </v-card>
            <v-card>
              <v-card-title>Grammar BNF</v-card-title>
              <pre class="code-container">
                <code>
  e ::= n | x | e + e | e - e | e * e

  b ::= true | false | e = e | e ≤ e | ¬ b | b ∧ b

  S ::= x := e | skip | S; S | if b then S else S | while b do S
                </code>
              </pre>
            </v-card>
            <v-card>  
              <v-card-title class="text-h6">Grammar EBNF</v-card-title>
              <pre class="code-container">
                <code>
  program = instruction, {";", instruction}, EOF;
  
  instruction = assign | branch | cycle | skip;
  
  assign = ID, ":=", expr;
  
  branch = "if", condition, "then", block, "else", block;
  
  cycle = "while", condition, "do", block;
  
  block = "(", instruction, {";", instruction}, ")" | instruction;
  
  skip = "skip";
  
  expr = "(", expr, ")" | expr, "*", expr | expr, ("+" | "-"), expr | ID | [MINUS], NUMBER;
  
  condition = condition, "and", condition | expr, "=", expr | expr, "≤", expr | "true" | "false" | "!", "(", condition, ")" | "(", condition, ")";
                </code>
              </pre>
            </v-card>
          </div>
        </v-card-text>
        </v-card>
      </v-dialog>
</template>

<script>
import MonacoEditor from './MonacoEditor.vue';
import Latex from './Latex.vue';
 export default {
    name:"PomocnikEN",
    props: ['screenWidth'],
    components:{
        MonacoEditor,
        Latex
    },
    data(){
        return{
            content: 'content1',
            fixedContent1: 'x := 1',
            fixedContent2: `x := 1;\ny := 4;\nwhile !(x = y) do (\n\tx := x * y;\n\ty := y - 1\n)`,
            fixedContent3: `if !(x = 1) then (\n    x := x + 1\n) else skip;\nif ¬(x = 1) then (\n    x := x + 1\n) else skip`,
            fixedContent4: `if !(x = 1) and x <= 0 then x := x+1 else skip`,
            exportContent: 'content1',
            abstraktnaImplementacia:' (c, st, s)',
            aritmetickeVyrazyHlava:`
            \\mathscr{T}\\mathscr{E} : \\textbf{Expr} \\rightarrow \\textbf{Code}
            `,
            aritmetickeVyrazy: `
                \\begin{align*}
                \\mathscr{T}\\mathscr{E}\\llbracket n \\rrbracket &= \\text{PUSH}-n \\\\
                \\mathscr{T}\\mathscr{E}\\llbracket x \\rrbracket &= \\text{FETCH}-x \\\\
                \\mathscr{T}\\mathscr{E}\\llbracket e_1 + e_2 \\rrbracket &= \\mathscr{T}\\mathscr{E}\\llbracket e_2 \\rrbracket : \\mathscr{T}\\mathscr{E}\\llbracket e_1 \\rrbracket : \\text{ADD} \\\\
                \\mathscr{T}\\mathscr{E}\\llbracket e_1 * e_2 \\rrbracket &= \\mathscr{T}\\mathscr{E}\\llbracket e_2 \\rrbracket : \\mathscr{T}\\mathscr{E}\\llbracket e_1 \\rrbracket : \\text{MULT} \\\\
                \\mathscr{T}\\mathscr{E}\\llbracket e_1 - e_2 \\rrbracket &= \\mathscr{T}\\mathscr{E}\\llbracket e_2 \\rrbracket : \\mathscr{T}\\mathscr{E}\\llbracket e_1 \\rrbracket : \\text{SUB}
                \\end{align*}
            `,
            boolovskeVyrazyHlava:`
            \\mathscr{T}\\mathscr{B} : \\textbf{Bexpr} \\rightarrow \\textbf{Code}
            `,
            boolovskeVyrazy: `
            \\begin{align*}
                \\mathscr{T}\\mathscr{B}\\llbracket true \\rrbracket &= \\text{TRUE}  \\\\
                \\mathscr{T}\\mathscr{B}\\llbracket false \\rrbracket &= \\text{FALSE} \\\\
                \\mathscr{T}\\mathscr{B}\\llbracket e_1 = e_2 \\rrbracket &= \\mathscr{T}\\mathscr{E}\\llbracket e_2 \\rrbracket : \\mathscr{T}\\mathscr{B}\\llbracket e_1 \\rrbracket : \\text{EQ} \\\\
                \\mathscr{T}\\mathscr{B}\\llbracket e_1 \\leq e_2 \\rrbracket &= \\mathscr{T}\\mathscr{E}\\llbracket e_2 \\rrbracket : \\mathscr{T}\\mathscr{E}\\llbracket e_1 \\rrbracket : \\text{LE}  \\\\
                \\mathscr{T}\\mathscr{B}\\llbracket e_1 \\neg e_2 \\rrbracket &= \\mathscr{T}\\mathscr{B}\\llbracket b \\rrbracket : \\text{NEG} \\\\
                \\mathscr{T}\\mathscr{B}\\llbracket b_1 \\land b_2 \\rrbracket &= \\mathscr{T}\\mathscr{B}\\llbracket b_2 \\rrbracket : \\mathscr{T}\\mathscr{B}\\llbracket b_1 \\rrbracket : \\text{AND} 
            \\end{align*}
            `,
            prikazyHlava:`
            \\mathscr{T}\\mathscr{S} : \\textbf{Statm} \\rightarrow \\textbf{Code}
            `,
            prikazy: `
                \\begin{align*}
                \\mathscr{T}\\mathscr{S}\\llbracket x:=e \\rrbracket &= \\mathscr{T}\\mathscr{S}\\llbracket e \\rrbracket : \\text{STORE}-x \\\\
                \\mathscr{T}\\mathscr{S}\\llbracket \\text{skip} \\rrbracket &= \\text{EMPTYOP}  \\\\
                \\mathscr{T}\\mathscr{S}\\llbracket S_1;S_2\\rrbracket &= \\mathscr{T}\\mathscr{S}\\llbracket S_1 \\rrbracket : \\mathscr{T}\\mathscr{S}\\llbracket S_2 \\rrbracket  \\\\
                \\mathscr{T}\\mathscr{S}\\llbracket \\text{if}~b~\\text{then}~S_1~ \\text{else}~S_2~\\rrbracket &= \\mathscr{T}\\mathscr{B}\\llbracket b \\rrbracket : \\text{BRANCH}(\\mathscr{T}\\mathscr{S}\\llbracket S_1\\rrbracket, \\mathscr{T}\\mathscr{S}\\llbracket S_2 \\rrbracket) \\\\ 
                \\mathscr{T}\\mathscr{S}\\llbracket \\text{while}~b~ \\text{do}~S~ \\rrbracket &= \\text{LOOP}(\\mathscr{T}\\mathscr{B}\\llbracket b \\rrbracket, \\mathscr{T} \\mathscr{S} \\llbracket S \\rrbracket) 
                \\end{align*}
            `,
            push: `\\langle\\textbf{PUSH} - n : c, st, s\\rangle \\Rightarrow \\langle c, N \\llbracket n \\rrbracket : st, s\\rangle`,
            add: `\\langle\\textbf{ADD} : c, v_1 : v_2 : st, s\\rangle \\Rightarrow \\langle c, (v_1 \\oplus v_2) : st, s\\rangle`,
            mult: `\\langle\\textbf{MULT} : c, v_1 : v_2 : st, s\\rangle \\Rightarrow \\langle c,(v_1 \\otimes v_2) : st, s\\rangle`,
            sub: `\\langle\\textbf{SUB} : c, v_1 : v_2 : st, s\\rangle \\Rightarrow \\langle c, (v_1 \\ominus v_2) : st, s\\rangle`,
            eq: `\\langle\\textbf{EQ} : c, v_1 : v_2 : st, s\\rangle \\Rightarrow \\langle c, (v_1 = v_2) : st, s\\rangle`,
            le: `\\langle\\textbf{LE} : c, v_1 : v_2 : st, s\\rangle \\Rightarrow \\langle c, (v_1 \\leq v_2) : st, s\\rangle`,
            True: `\\langle\\textbf{TRUE} : c, st, s\\rangle \\Rightarrow \\langle c, \\textbf{tt} : st, s\\rangle`,
            False: `\\langle\\textbf{FALSE} : c, st, s\\rangle \\Rightarrow \\langle c, \\textbf{ff} : st, s\\rangle`,
            and: `\\langle\\textbf{AND} : c, t_1 : t_2 : st, s\\rangle \\Rightarrow 
                \\begin{cases} 
                \\langle c, \\textbf{tt} : st, s\\rangle, & \\text{ak } t_1 = \\textbf{tt} \\text{ and } t_2 = \\textbf{tt} \\\\
                \\langle c, \\textbf{ff} : st, s\\rangle, & \\text{ak } t_1 = \\textbf{ff} \\text{ or } t_2 = \\textbf{ff}
                \\end{cases}`,
            neg: `\\langle\\textbf{NEG} : c, t : st, s\\rangle \\Rightarrow 
                    \\begin{cases} 
                    \\langle c, \\textbf{tt} : st, s\\rangle, & \\text{if } t = \\textbf{ff}\\\\
                    \\langle c, \\textbf{ff} : st, s\\rangle, & \\text{if } t = \\textbf{tt} 
                    \\end{cases}`,
            fetch: `\\langle\\textbf{FETCH} - x : c, st, s\\rangle \\Rightarrow \\langle c, (s \ x) : st, s\\rangle`,
            store: `\\langle\\textbf{STORE} - x : c, v : st, s\\rangle \\Rightarrow \\langle c, st, s[ x \\mapsto v]\\rangle`,
            branch: `\\langle\\textbf{BRANCH}(c_1, c_2) : c, t : st, s\\rangle \\Rightarrow
                    \\begin{cases} 
                    \\langle c_1 : c, st, s\\rangle, & \\text{if } t = \\textbf{tt} \\\\
                    \\langle c_2 : c, st, s\\rangle, & \\text{if } t = \\textbf{ff} 
                    \\end{cases}`,
            loop: `\\begin{aligned}
            \\langle\\textbf{LOOP}(c_1, c_2) : c, st, s\\rangle &\\Rightarrow \\\\
                    &\ \\langle c_1 : \\textbf{BRANCH}(c_2 : \\textbf{LOOP}(c_1, c_2), \\textbf{EMPTYOP}) : c, st, s\\rangle 
                    \\end{aligned}`,
            emptyop: `\\langle\\textbf{EMPTYTOP} : c, st, s\\rangle \\Rightarrow \\langle c, st, s\\rangle `,
            pushText:`\\text{Inštrukcia } \\textbf{PUSH} - ~n~ \\text{zoberie hodnotu čísla} ~n~ \\text{a vloží ju na vrchol zásobníka:}`,
            addText:`\\text{Inštrukcie } \\textbf{ADD}, \\textbf{MULT}, \\textbf{SUB}, \\textbf{EQ}, \\textbf{LE} \\text{ očakávajú, že na vrchole zásobníka sa nachádzajú dve číselné hodnoty. \\ Pri inštrukciách } \\textbf{ADD}, \\textbf{MULT} \\text{ a } \\textbf{SUB} \\text{ sa tie dve číselné hodnoty odstránia zo zásobníka a výsledok danej operácie sa zapíše na vrchol zásobníka:}`,
            eqText:`\\text{Inštrukcia } \\textbf{EQ} \\text{ potom čo porovná dve číselné hodnoty tak ich odstráni zo zábosníka a na vrchol zapíše pravdivostnú hodnotu relácie rovnosti:}`,
            leText:`\\text{Inštrukcia } \\textbf{LE} \\text{ porovná dve hodnoty na vrchole zásobníka, odstráni ich a na vrch zapíše pravidvostnú hodnotu nerovnosti:}`,
            TrueText:`\\text{Inštrukcie }\\textbf{TRUE} \\text{ a } \\textbf{FALSE}\\text{ vložia na vrchol zásobníka pravdivostnú hodnotu} \\textbf{ tt } \\text{alebo} \\textbf{ ff}:`,
            andText:`\\text{Inštrukcia }\\textbf{AND } \\text{očakáva na vrchole zásbníka dve pravdivostné hodnoty, $t_1$ a $t_2$, vykoná ich konjukciu, odstráni ich a výslednú pravdivostnú hodnotu} \\textbf{ tt}\\text{ alebo }\\textbf{ff} \\text{ vloží na vrchol zásobníka:}`,
            negText:`\\text{Inštrukcia } \\textbf{NEG } \\text{očakáva na vrchole zásobníka pravdivostnú hodnotu, ktorú odstráni a na vrchol zapíše negáciu pravdivostnej hodnoty:}`,
            fetchText:`\\text{Inštrukcia } \\textbf{FETCH }-\\textit{x}\\text{ zoberie hodnotu premennej } \\textit{x } \\text{v danom stave a vloží ho na vrchol zásobníka:}`,
            storeText:`\\text{Inštrukcia }\\textbf{STORE}-\\textit{x } \\text{zoberie hodnotu z vrchola zásoníka } (\\textit{v}), \\text{ ktorá predpokladá, že je číselnou hodnotou, a priradí ju premennej } \\textit{x}:`,
            branchText:`\\text{Inštrukcia }\\textbf{BRANCH}(c_1, c_2) \\text{ očakáva na vrchole zásobníka 
            pravdivostnú hodnotu }(\\textit{t}), \\text{ podľa ktorej vykoná vetvenie programu. Ak teda bude pravdivostná hodnota pravdivá vykoná kód } c_1 \\text{ a ak nepravdivá tak vykoná kód }c_2:`,
            loopText:`\\text{Inštrukcia }\\textbf{LOOP}(c_1, c_2) \\text{ vykoná kód }c_1 \\text{ a potom vykoná inštrukciu }\\textbf{BRANCH}:`,
            emptyopText:`\\text{Inštrukcia } \\textbf{EMPTYOP} \\text{ je prázdna inštrukcia, ktorá nezmení ani zásobník, ani stav:}`
        }
    }
 }
</script>