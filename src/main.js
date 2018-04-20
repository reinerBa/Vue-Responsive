// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import responsive from './index'
import VuePrism from 'vue-prism'
import 'prismjs/themes/prism.css'

Vue.use(VuePrism)
Vue.use(responsive)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
