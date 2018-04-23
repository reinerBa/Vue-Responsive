<template>
  <div class="demoThree">
    <h4 class="title">This example shows how easy you can use the Breakpoints of Bootstrap 3, which are different of the default Bootstrap 4 breakpoints</h4>

    <p v-responsive:bs3="['hidden-all','xs']">Extra small<br /><img src="http://lorempixel.com/360/240/animals" /></p>
    <p v-responsive:bs3="['hidden-all','sm']">Small <br /><img src="http://lorempixel.com/540/360/animals" /></p>
    <p v-responsive:bs3="['hidden-all','md']">Middle<br /><img src="http://lorempixel.com/720/360/animals" /></p>
    <p v-responsive:bs3="['hidden-all','lg']">Large <br /><img src="http://lorempixel.com/780/360/animals" /></p>

    <h4>
      The sourcecode of the lines above:
    </h4>
    <pre class="language-html"><code v-text="code"></code></pre>

  </div>
</template>

<script>
export default {
  name: 'DemoThree',
  data () {
    return {
      code: `<p v-responsive:bs3="['hidden-all','xs']"> Extra small <img src=".../360/240/animals" /></p>
<p v-responsive:bs3="['hidden-all','sm']"> Small <img src=".../540/360/animals" /></p>
<p v-responsive:bs3="['hidden-all','md']"> Middle <img src=".../720/360/animals" /></p>
<p v-responsive:bs3="['hidden-all','lg']"> Large <img src=".../780/360/animals" /></p>
`
    }
  }
}
</script>

<style scoped>
.demoThree {
  max-width: 850px;
  margin: 0 auto;
}
h4.title {
  margin-left: 6em;
}
</style>
