<template>
  <div class="routes">
    <div class="header">
    <span v-show="!r.hide" v-for="(r, idx) in routes" :key="idx">
      <label :for="'route'+idx" :class="{marked: marked === r.component}">{{r.title}}</label>
      <input v-model="marked" :id="'route'+idx" :value="r.component" name="route" type="radio"/>
    </span>
  </div>
  <div>
    <router-view />
    <component :is="marked"></component>
  </div>
  </div>
</template>

<script lang="ts">
import DemoOne from './Overview.vue'
import DemoTwo from './Formats-Demo.vue'
import DemoThree from './BS3-Demo.vue'
import DemoFour from './Token-Demo.vue'
import DemoFive from './DemoFive'
import DemoSix from './Classes-Demo.vue'
import {routes} from './../router'

export default {
  name: 'Routes',
  components: {DemoOne, DemoTwo, DemoThree, DemoFour, DemoFive, DemoSix},
  data () {
    return {
      marked: 'demoFour',
      routes: [
        {
          component: 'demoOne',
          title: 'Overview'
        },
        {
          component: 'demoTwo',
          title: 'Formats'
        },
        {
          component: 'demoThree',
          title: 'Bootstrap 3'
        },
        {
          component: 'demoFour',
          title: 'Tokens'
        },
        {
          component: 'demoFive',
          title: 'Numbers',
          hide: 0
        },
        {
          component: 'demoSix',
          title: 'Classes',
          hide: 0
        }
      ]
    }
  },
  mounted () {
    let lastVisited = window.location.hash.substr(1)
    if (lastVisited && this.routes.find(e => e.component === lastVisited)) this.marked = lastVisited
    else window.location.hash = '#' + this.marked
  },
  watch: {
    marked (newVal) {
      window.location.hash = '#' + newVal
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
.header > span {
  margin: 3px;
}
.marked{
  background-color: darkorange;
  border-radius: 10%;
  padding: 3px;
}
input[type="radio"] {
    display: none;
}
</style>
