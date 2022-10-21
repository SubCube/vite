import { createRouter, createWebHistory } from 'vue-router'

declare module 'vue-router' {
  interface RouteMeta {
    title: string
  }
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main',
      component: () => import('@/pages/MainPage.vue'),
      meta: { title: 'Main' }
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/pages/AboutPage.vue'),
      meta: { title: 'About' }
    }
  ]
})

router.afterEach(to => {
  document.title = to.meta?.title || 'Личный кабинет'
})

export default router
