<template>
  <div class="demoFour">
    <pre v-responsive.lg.xl class="language-html"><code v-text="panels[0]"></code></pre>
    <pre v-responsive.md class="language-html"><code v-text="panels[1]"></code></pre>
    <pre v-responsive.sm.xs class="language-html"><code v-text="panels[2]"></code></pre>
    <pre v-responsive.lg.md.sm class="language-html"><code v-text="panels[3]"></code></pre>
  </div>
</template>

<script>
export default {
  name: 'DemoFour',
  data () {
    return {
      panels: [
        `<span v-responsive.lg.xl>
  large and extra-large
</span>`,
        `<span v-responsive.md>
  medium
</span>`,
        `<span v-responsive.sm.xs>
  small and extra-small
</span>`,
        `<span v-responsive.lg.md.sm>
  large + medium + small
</span>`
      ]
    }
  }
}
</script>

<style scoped>
.demoFour{
  margin: auto;
  margin-left: 100px;
}
.demo-block{
  width: 40%;
  border: 1px solid blue;
  padding: 1rem;
  position: relative;
  display: inline-block;
  margin: 1rem;
}
</style>
