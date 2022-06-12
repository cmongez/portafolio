import Vue from 'vue'
import VueRouter from 'vue-router'
import WelcomeView from '../views/WelcomeView.vue'
import HomeView from '../views/HomeView.vue'
import LayoutView from '../views/LayoutView.vue'



Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'welcome',
    component: WelcomeView
  },
  {
    path: '/home',
    name: 'layout',
    component: LayoutView,
    meta: { transition: 'slide-left' }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
