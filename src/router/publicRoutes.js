/**
 * 公开路由表
 */
import layoutView from '@/views/layout/layoutView.vue'

const publicRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/LoginView.vue')
  },
  {
    path: '/',
    // 注意：带有路径“/”的记录中的组件“默认”是一个不返回 Promise 的函数
    component: layoutView,
    redirect: '/profile',
    children: [
      {
        path: '/profile',
        name: 'profile',
        component: () => import('@/views/profile/ProfileView.vue'),
        meta: {
          title: 'profile',
          icon: 'el-icon-user'
        }
      },
      {
        path: '/404',
        name: '404',
        component: () => import('@/views/error-page/ErrorNotFound.vue')
      },
      {
        path: '/401',
        name: '401',
        component: () => import('@/views/error-page/ErrorPage.vue')
      }
    ]
  }
]

export default publicRoutes
