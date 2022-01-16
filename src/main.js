import { createApp } from 'vue'
import App from './App.vue'
import 'prismjs/themes/prism.css'
import responsive from './index'
import OptionsForVueResponsive from './Interfaces/OptionsForVueResponsive'
import router from './router'

const app = createApp(App)

// custom defined plugin options
const pluginOptions/* : OptionsForVueResponsive*/ = {
  default: 'tailwind',
  setClasses: true, // default value
  breakpoints: {    // optional
    alias: 'tailwind',
    sm: { max: 649, class: 'small-screen' },
    md: { max: 678 },
    lg: { max: 1024 },
    xl: { max: 1280 },
    '2xl': { max: 1536, class: 'very-big-screen' }
  },
}

// uses default options: {default: 'bs5', setClasses: true}
// app.use(responsive)

// uses custom options from above:
app.use(responsive, pluginOptions)

app.use(router)
app.mount('#app')
