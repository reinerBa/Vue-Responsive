<template>
  <div class="demoFive">
    <pre v-responsive="-543" class="language-html demo-block"><code v-text="text1"></code></pre>
    <pre v-responsive="-1024" class="language-html demo-block"><code v-text="text2"></code></pre>
    <pre v-responsive="+1024 && -1440" class="language-html demo-block"><code v-text="text3"></code></pre>
    <pre v-responsive="+1440" class="language-html demo-block"><code v-text="text4"></code></pre>
    <pre v-responsive="992" class="language-html demo-block"><code v-text="text5"></code></pre>
  </div>
</template>

<script>
import { defineComponent } from "@vue/runtime-core"

export default defineComponent({
  name: 'DemoFive',
  data () {
    return {
      text1: `<span v-responsive="-543">
  Visible@ <543px
</span>`,
      text2: `<span v-responsive="-1024">
  Visible@ <1024px
</span>`,
      text3: `<span v-responsive="+1024 && -1440">
  Visible@ >=1024 and <1440px
</span>`,
      text4: `<span v-responsive="+1440">
  Visible@ >=1440px
</span>`,
      text5: `<span v-responsive="992">
  Visible@ >=992px
</span>`
    }
  }
})
</script>

<style scoped>
.demoFive{
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
