import Vue from 'vue'
import VueRouter from 'vue-router'
import Checkout from '../views/Checkout'
import NotFound from '../views/NotFound.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'checkout',
    component: Checkout
  },
  {
    path: '*',
    name: 'not-found',
    component: NotFound,
  },
  
    // path: '/about',
    // name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import( '../views/AboutView.vue')
  
]

const router = new VueRouter({
  routes
})

export default router
