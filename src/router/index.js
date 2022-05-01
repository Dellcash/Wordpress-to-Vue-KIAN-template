import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  linkExactActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/about',
      name: 'About',
      component: () => import('../views/About.vue'),
    },
    {
      path: '/gallery',
      name: 'Gallery',
      component: () => import('../views/Gallery.vue')
    },
    {
      path: '/contact',
      name: 'Contant',
      component: () => import('../views/Contact.vue')
    }
  ]
})

export default router
