import Overview from './components/Overview.vue'
import Formats from './components/Formats-Demo.vue'
import BS3 from './components/BS3-Demo.vue'
import Tokens from './components/Token-Demo.vue'
import Numbers from './components/DemoFive'
import Classes from './components/Classes-Demo.vue'
import { createWebHistory, createRouter, RouteRecordRaw } from "vue-router"

export const routes: RouteRecordRaw[] = [
    {
        path: '/',
        component: Overview,
        name: 'Overview'
      },
      {
        path: '/formats',
        component: Formats,
        name: 'Formats'
      },
      {
        path: '/bootstrap3',
        component: BS3,
        name: 'Bootstrap 3'
      },
      {
        path: '/tokens',
        component: Tokens,
        name: 'Tokens'
      },
      {
        path: '/numbers',
        component: Numbers,
        name: 'Numbers'
      },
      {
        path: '/classes',
        component: Classes,
        name: 'Classes'
      }
]

const router = createRouter({
    history: createWebHistory(),
    routes
  })
  
export default router
