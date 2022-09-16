import { createRouter, createWebHistory } from 'vue-router'
import { name } from '../../package.json'
import Home from '../views/Home.vue'
import BasicLayout from '../layout/BasicLayout.vue'

const router = createRouter({
  history: createWebHistory(`/${name}/`),
  routes: [
    {
      path: '/',
      name: 'home',
      component: BasicLayout,
      children: [
        {
          path: '/',
          name: 'home',
          component: Home
        },
        {
          path: '/about',
          name: 'about',
          // route level code-splitting
          // this generates a separate chunk (About.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import('../views/About.vue')
        }
      ]
    }
  ]
})

export default router
