import { createRouter, createWebHashHistory } from 'vue-router'
/**
 * 公开路由表
 */
const publicRoutes = [
  {
    path: '/',
    component: () => import('@/views/layout/layoutView.vue')
  },
  {
    path: '/login',
    component: () => import('@/views/login/LoginView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: publicRoutes
})

export default router
