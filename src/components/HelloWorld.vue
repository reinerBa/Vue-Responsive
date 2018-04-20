<template>
  <div class="hello">

    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <h1 v-responsive="'hidden-xs'">Big title</h1>
    <h2 v-responsive="['hidden-all','xs','sm']">Small title</h2>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style>
</style>
