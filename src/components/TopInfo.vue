<template>
  <div class="topInfo">
    <div id="topInfo">
      <i v-responsive="['hidden-all','xs']">Extra small</i>
      <i v-responsive="['hidden-all','sm']">Small </i>
      <i v-responsive="['hidden-all','md']">Middle</i>
      <i v-responsive="['hidden-all','lg']">Large </i>
      <i v-responsive="['hidden-all','xl']">Extra large</i>
    </div>
    <div class="source-toggle">
      <label><input v-model="showSource" type="checkbox"/>Show Sourcecode</label>
      <pre v-show="showSource" class="language-js"><code v-text="code"></code>
  </pre>

    </div>
  </div>
</template>

<script>
export default {
  name: 'TopInfo',
  data () {
    return {
      showSource: false,
      code: `<i v-responsive="['hidden-all','xs']">Extra small</i>
<i v-responsive="['hidden-all','sm']">Small </i>
<i v-responsive="['hidden-all','md']">Middle</i>
<i v-responsive="['hidden-all','lg']">Large </i>
<i v-responsive="['hidden-all','xl']">Extra large</i>`
    }
  }
}
</script>

<style scoped>
.topInfo{
  position: fixed;
  top: 0;
  left: 0;
  width: 75px;
}
.source-toggle {
  margin-top: .25rem;
}
#topInfo {
  padding: 4px;
  border: 3px dashed orange;
  background-color: rgba(76, 255, 0,.4);
  color: darkturquoise;
}
label {
  font-size: small;
}
pre {
  background-color: #f5f5f5e8;
  border: 1px solid black;
  padding: .25rem;
  font-size: smaller;
  width: fit-content;
  text-align: left;
}
</style>
