<template>
  <div class="demoFour">
    <p>
      Just use <strong>v-responsive</strong> + <strong>[xs, sm, md, lg, xl]</strong> to make elements visible on specific breakpoints and hide them on all others.
    </p>
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
  1. large and extra-large
</span>`,
        `<span v-responsive.md>
  2. medium
</span>`,
        `<span v-responsive.sm.xs>
  3. small and extra-small
</span>`,
        `<span v-responsive.lg.md.sm>
  4. large + medium + small
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
