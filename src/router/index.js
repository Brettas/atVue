import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import ListUser from '../views/ListUser.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/listuser',
    name: 'listuser',
    component: ListUser
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
