import { createRouter, createWebHashHistory } from 'vue-router'

import privateRoutes from './privateRoutes'
import publicRoutes from './publicRoutes'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [...publicRoutes, ...privateRoutes]
})

export default router
