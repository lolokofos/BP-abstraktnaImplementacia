<template>
  <div v-html="renderedLatex"></div>
</template>

<script>
export default {
  props: {
    latexString: String
  },
  computed: {
    renderedLatex() {
      return this.latexString ? window.katex.renderToString(this.latexString, {
        throwOnError: false,
        displayMode: true,
        macros: {
          "\\mhyphen": "\\text{–}" 
        }
      }) : '';
    }
  }
}
</script>