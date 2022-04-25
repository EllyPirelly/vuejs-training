import { createRouter, createWebHistory } from 'vue-router'
import Clock from '../views/Clock.vue'
import Home from '../views/Home.vue'
import NotFound from '../views/NotFound.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/clock',
    name: 'Clock',
    component: Clock,
  },
  // catch-all 404 example
  // will catch any routes that are not covered by routes defined in this file
  // it's a REGEX, not a function
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
