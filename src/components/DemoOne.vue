<template>
  <div class="demoOne">
    <h1 v-responsive="['hidden-all','xl']">A Vue.js responsivity plugin</h1>
    <h2 v-responsive="['hidden-all','lg']">A Vue.js responsivity plugin</h2>
    <h3 v-responsive="['hidden-all','md']">A Vue.js responsivity plugin</h3>
    <h4 v-responsive="['hidden-all','sm']">A Vue.js responsivity plugin</h4>
    <h5 v-responsive="['hidden-all','xs']">A Vue.js responsivity plugin</h5>

    <h1 v-responsive="['hidden-all','xl']">extra large</h1>
    <h2 v-responsive="['hidden-all','lg']">large</h2>
    <h3 v-responsive="['hidden-all','md']">medium</h3>
    <h4 v-responsive="['hidden-all','sm']">small</h4>
    <h5 v-responsive="['hidden-all','xs']">extra small</h5>

    <table style="margin:15px auto;border-spacing:0;">
      <tr><th>v-responsive=</th><th>XS</th><th>SM</th><th>MD</th><th>LG</th><th>XL</th></tr>
      <tr><td>['hidden-all', 'xs', 'xl']</td><td>.</td><td></td><td></td><td></td><td>.</td></tr>
      <tr><td>['hidden-xs']</td><td></td><td>.</td><td>.</td><td>.</td><td>.</td></tr>
      <tr><td>['hidden-xs', 'hidden-sm']</td><td><td><td>.</td><td>.</td><td>.</td></tr>
      <tr><td>['hidden-all', 'lg', 'xl']</td><td></td><td></td><td></td><td>.</td><td>.</td></tr>
      <tr><td>['hidden-all', 'xl']</td><td></td><td></td><td></td><td></td><td>.</td></tr>
      <tr><td>['hidden-all', 'xs', 'md', 'xl']</td><td>.</td><td></td><td>.</td><td></td><td>.</td></tr>
    </table>
<h4>
  The sourcecode of the two lines above:
</h4>
<pre class="language-html"><code v-text="code"></code></pre>

  </div>
</template>

<script>
export default {
  name: 'DemoOne',
  data () {
    return {
      code: `<h1 v-responsive="['hidden-all','xl']">A Vue.js responsivity plugin</h1>
<h2 v-responsive="['hidden-all','lg']">A Vue.js responsivity plugin</h2>
<h3 v-responsive="['hidden-all','md']">A Vue.js responsivity plugin</h3>
<h4 v-responsive="['hidden-all','sm']">A Vue.js responsivity plugin</h4>
<h5 v-responsive="['hidden-all','xs']">A Vue.js responsivity plugin</h5>

<h1 v-responsive="['hidden-all','xl']">extra large</h1>
<h2 v-responsive="['hidden-all','lg']">large</h2>
<h3 v-responsive="['hidden-all','md']">medium</h3>
<h4 v-responsive="['hidden-all','sm']">small</h4>
<h5 v-responsive="['hidden-all','xs']">extra small</h5>`
    }
  }
}
</script>

<style scoped>
  table td, table th {
    border: 1px solid black;
    padding: 3px;
  }
  td:not(:empty):not(:first-of-type){background-color:lime;color:transparent;}

.demoOne{
  max-width: 850px;
  margin: 0 auto;
}
</style>
