<template>
  <div class="routes">
    <div class="header">
    <span v-for="(r, key, idx) in routes" :key="idx">
      <label :for="'route'+idx" :class="{marked: marked === key}">{{r.title}}</label>
      <input v-model="marked" :id="'route'+idx" :value="key" name="route" type="radio"/>
    </span>
  </div>
  <div>
    <component :is="marked"></component>
  </div>
  </div>
</template>

<script>
import DemoOne from './DemoOne'
import DemoTwo from './DemoTwo'
import DemoThree from './DemoThree'
import DemoFour from './DemoFour'
import DemoFive from './DemoFive'

export default {
  name: 'Routes',
  components: {DemoOne, DemoTwo, DemoThree, DemoFour, DemoFive},
  data () {
    return {
      marked: 'demoOne',
      routes: {
        demoOne: {
          title: 'Demo 1'
        },
        demoTwo: {
          title: 'Demo 2'
        },
        demoThree: {
          title: 'Demo 3'
        },
        demoFour: {
          title: 'Demo 4'
        },
        demoFive: {
          title: 'Demo 5'
        }
      }
    }
  }
}
</script>

<style scoped>
.header{
  position: sticky;
  top: 0;
  border: 1px solid black;
  padding: .5rem;
  margin-left: 100px;
  background-color: white;
}
.marked{
  background-color: darkorange;
  border-radius: 10%;
  padding: 1px;
}
input[type="radio"] {
    visibility:hidden;
}
</style>
