<script lang="ts" setup>
import Routes from './components/Routes.vue'
import TopInfo from './components/TopInfo.vue'
</script>

<template>
  <div id="app">
    <routes></routes>

    <top-info></top-info>
    <footer>
      This is a demonstration site for the Open-Source plugin <a href="https://github.com/reinerBa/Vue-Responsive">vue-responsive</a> hosted at Github.com
    </footer>
  </div>
</template>

<style>
footer {
  position: fixed;
  bottom: 0;
  padding: 2px;
  width: 100%;
  text-align: center;
  background-color: antiquewhite;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body {
  margin-bottom: 1em;
  background-color: ghostwhite;
  margin-top: 0;
  text-align: center;
  font-family:'Segoe UI','Franklin Gothic Medium', Arial
}

/*! From highlight.js, 
* Copyright (c) 2006, Ivan Sagalaev, 
* licensed under BSD 3-Clause License, 
* URL: https://github.com/highlightjs/highlight.js/  
*/
.hljs{display:block;overflow-x:auto;padding:0.5em;background:#F0F0F0}.hljs,.hljs-subst{color:#444}.hljs-comment{color:#888888}.hljs-keyword,.hljs-attribute,.hljs-selector-tag,.hljs-meta-keyword,.hljs-doctag,.hljs-name{font-weight:bold}.hljs-type,.hljs-string,.hljs-number,.hljs-selector-id,.hljs-selector-class,.hljs-quote,.hljs-template-tag,.hljs-deletion{color:#880000}.hljs-title,.hljs-section{color:#880000;font-weight:bold}.hljs-regexp,.hljs-symbol,.hljs-variable,.hljs-template-variable,.hljs-link,.hljs-selector-attr,.hljs-selector-pseudo{color:#BC6060}.hljs-literal{color:#78A960}.hljs-built_in,.hljs-bullet,.hljs-code,.hljs-addition{color:#397300}.hljs-meta{color:#1f7199}.hljs-meta-string{color:#4d99bf}.hljs-emphasis{font-style:italic}.hljs-strong{font-weight:bold}
</style>
