// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import App from './App'
import responsive from './index2'
import VuePrism from 'vue-prism'
import 'prismjs/themes/prism.css'
let Vue = window.Vue

Vue.use(VuePrism)
Vue.use(responsive)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
