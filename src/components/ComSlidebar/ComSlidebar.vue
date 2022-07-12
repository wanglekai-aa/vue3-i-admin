<template>
  <div class="sidebar-container">
    <div class="logo-container">
      <el-avatar
        :size="logoHeight"
        shape="square"
        :src="require('@/assets/logo.jpg')"
      />
      <h1 class="logo-title" v-if="$store.getters.sidebarOpened">I-Admin</h1>
    </div>

    <el-scrollbar>
      <sidebar-menu />
    </el-scrollbar>
  </div>
</template>

<script setup>
import SidebarMenu from './SidebarMenu.vue'
import {} from 'vue'
const logoHeight = 44
</script>

<style lang="scss" scoped>
.logo-container {
  // height: 44px;
  height: v-bind(logoHeight) + 'px';
  padding: 10px 0 22px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  .logo-title {
    margin-left: 10px;
    color: #fff;
    font-weight: 600;
    line-height: 50px;
    font-size: 16px;
    white-space: nowrap;
  }
}
</style>
