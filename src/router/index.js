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
      meta: {
        title: 'صفحه نخست'
      }
    },
    {
      path: '/about',
      name: 'About',
      component: () => import('../views/About.vue'),
      meta: {
        title: 'درباره ما'
      }
    },
    {
      path: '/gallery',
      name: 'Gallery',
      component: () => import('../views/Gallery.vue'),
      meta: {
        title: 'گالری عکس‌ها'
      }
    },
    {
      path: '/contact',
      name: 'Contant',
      component: () => import('../views/Contact.vue'),
      meta: {
        title: 'تماس با ما'
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title} | قالب کیان`
  next()
})

export default router
