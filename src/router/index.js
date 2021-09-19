import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Set from '../views/Set.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/set',
    name: 'Set',
    component: Set
  }
]

const router = new VueRouter({
  routes
})

export default router
