
import App from './App.vue'
import responsive from './index'
import VuePrism from 'vue-prism'
import 'prismjs/themes/prism.css'
let Vue = window.Vue

Vue.use(VuePrism)
Vue.use(responsive)
Vue.config.productionTip = false

new Vue({
  render: (h) => h(App),
}).$mount('#app')
