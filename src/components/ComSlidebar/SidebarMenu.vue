<template>
  <!-- 一级 menu 菜单 -->
  <el-menu
    :default-active="activeMenu"
    :background-color="$store.getters.cssVar.menuBg"
    :text-color="$store.getters.cssVar.menuText"
    :active-text-color="$store.getters.cssVar.menuActiveText"
    :unique-opened="true"
    router
  >
    <sidebar-item v-for="route in routes" :key="route.path" :route="route" />
  </el-menu>
</template>

<script setup>
import SidebarItem from './SidebarItem.vue'
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { filterRouters, generateMenus } from '@/utils/route'

const router = useRouter()

// router.getRoutes() 获取所有 路由记录 的完整列表
const routes = computed(() => {
  const fRouters = filterRouters(router.getRoutes())
  return generateMenus(fRouters)
})
// console.log(routes.value)

// 高亮 menu
const route = useRoute()
const activeMenu = computed(() => {
  const { path } = route
  return path
})
</script>
