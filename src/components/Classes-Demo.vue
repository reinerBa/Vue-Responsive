<template>
  <div class="demoSix">
    <h4>This example shows how you can use classes instead of only hide/show elements</h4>
  <p>
    Just add "v-responsive.class" into an element and it will always have class on it, consisting of the prefix of the choosen set of breakpoints and the current breakpoint.
    Bootstrap 4 and a middle size Scren will add the class "bs4-md".
  </p>
    <div class="ul">
      <div v-for="(p, idx) in panels" :key="idx" v-responsive.class><span>A responsive panel</span></div>
    </div>
    <br />
    <span>The template code</span>
    <pre class="language-html"><code v-text="codeHtml"></code></pre>
    <span>The style code</span>
    <pre class="language-css"><code v-text="codeStyle"></code></pre>

  </div>
</template>

<script>
export default {
  name: 'DemoSix',
  data () {
    return {
      codeHtml: `<div v-for="(p, idx) in panels" v-responsive.class>
  <span>A responsive panel</span>
</div>`,
      codeStyle: `.bs4-lg, .bs4-xl {
  color: darkblue;
  width: 33%;
}
.bs4-xl {
  width: 25%
}
.bs4-md {
  color: green;
  width: 50%;
}
.bs4-sm, .bs4-xs {
  color: red;
  font-weight: bold;
  width: 100%;
}
`,
      panels: '0000000'.split('0')
    }
  }
}
</script>

<style scoped>
.ul{
  display: flex;
  flex-wrap: wrap;
}
.ul > div {
  margin: 3px 0;
}
.ul > div > span {
  width: 75%;
  background-color: lightblue;
  padding: 0 15%;
}
.bs4-lg, .bs4-xl {
  color: darkblue;
  width: 33%;
}
.bs4-xl {
  width: 25%
}
.bs4-md {
  color: green;
  width: 50%;
}
.bs4-sm, .bs4-xs {
  color: red;
  font-weight: bold;
  width: 100%;
}

p {
  padding: 5px;
  width: fit-content;
  margin-left: auto;
  margin-right: auto;
}
code {
  text-align: left;
}
.demoSix {
  max-width: 850px;
  margin: 0 auto;
  margin-left: 6em;
}
</style>
