<template>
  <div class="app-wrapper">
    <!-- 左侧 menu -->
    <!-- 主题更换，所以为 sidebar 赋值动态的背景颜色 -->
    <com-slidebar
      id="guide-sidebar"
      class="sidebar-container"
      :style="{ backgroundColor: variables.menuBg }"
    />
    <div class="main-container">
      <div class="fixed-header">
        <!-- 顶部的 navbar -->
        <com-navbar />
      </div>
      <!-- 内容区 -->
      <app-main />
    </div>
  </div>
</template>

<script setup>
import ComNavbar from '@/components/ComNavbar/ComNavbar.vue'
import ComSlidebar from '@/components/ComSlidebar/ComSlidebar.vue'
import AppMain from '@/components/AppMain/AppMain.vue'

import variables from '@/styles/variables.module.scss'
console.log(variables)
</script>

<style lang="scss" scoped>
@import '~@/styles/mixin.scss';
@import '~@/styles/variables.module.scss';

.app-wrapper {
  @include clearfix;
  position: relative;
  height: 100%;
  width: 100%;
}

.fixed-header {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 9;
  width: calc(100% - #{$sideBarWidth});
}
</style>
