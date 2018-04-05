<template>
  <div class="demoTwo">
    <div>
        <p v-responsive="'hidden-xs'">*I am hidden on extra small device screens*</p>
        <p v-responsive="['hidden-sm']">*I am hidden on small device screens*</p>
        <p v-responsive="respObj">This elements visibility is controlled by an object</p>
    </div>
    <pre class="language-html"><code v-text="codeHtml"></code></pre>
    <pre class="language-js"><code v-text="codeJs"></code></pre>

  </div>
</template>

<script>
export default {
  name: 'DemoTwo',
  data () {
    return {
      respObj: { 'xs': false, 'hidden-xs': true, 'hidden-xl': true },
      codeHtml: `<p v-responsive="'hidden-xs'">*I am hidden on extra small device screens*</p>
<p v-responsive="['hidden-sm']">*I am hidden on small device screens*</p>
<span v-responsive="respObj">#This elements visibility is controlled by an object</span>`,
      codeJs: `data () { return {
  respObj: { "xs": false, "hidden-xs": true, "hidden-xl": true },
`
    }
  }
}
</script>

<style scoped>
p {
  padding: 5px;
  background-color: rgba(76, 255, 0,.4);
  width: fit-content;
  margin-left: auto;
  margin-right: auto;
}
code {
  text-align: left;
}
</style>
