<template>
  <div class="navbar">
    <!-- 侧边栏收缩按钮 -->
    <ham-burger class="hamburger-container" />

    <!-- 面包屑 -->
    <bread-crumb class="breadcrumb-container" id="guide-breadcrumb" />

    <div class="right-menu">
      <!-- 引导按钮 -->
      <com-guide class="right-menu-item hover-effect" />

      <!-- 搜索框 -->
      <header-search class="right-menu-item hover-effect"></header-search>
      <!-- 全屏/退出全屏 -->
      <screen-full class="right-menu-item hover-effect" />
      <!-- 换肤按钮 -->
      <theme-picker class="right-menu-item hover-effect"></theme-picker>
      <!-- 语言切换按钮 -->
      <lang-select class="right-menu-item hover-effect" />
      <!-- 头像 -->
      <el-dropdown class="avatar-container" trigger="click">
        <div class="avatar-wrapper">
          <el-avatar
            shape="square"
            :size="40"
            :src="require('@/assets/logo.jpg')"
          ></el-avatar>
          <i class="el-icon-s-tools"></i>
        </div>
        <template #dropdown>
          <el-dropdown-menu class="user-dropdown">
            <router-link to="/">
              <el-dropdown-item> {{ $t('msg.navBar.home') }} </el-dropdown-item>
            </router-link>
            <a target="_blank" href="">
              <el-dropdown-item>{{ $t('msg.navBar.course') }}</el-dropdown-item>
            </a>
            <el-dropdown-item divided @click="handleLogout">
              {{ $t('msg.navBar.logout') }}
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script setup>
import HamBurger from '@/components/HamBurger/HamBurger.vue'
import BreadCrumb from '@/components/BreadCrumb/BreadCrumb.vue'
import LangSelect from '@/components/LangSelect/LangSelect.vue'
import ThemePicker from '@/components/ThemeSelect/ThemeSelect.vue'
import ScreenFull from '@/components/ScreenFull/ScreenFull.vue'
import HeaderSearch from '@/components/HeaderSearch/HeaderSearch.vue'
import ComGuide from '@/components/ComGuide/ComGuide.vue'

import { ElLoading } from 'element-plus'

import { useStore } from 'vuex'
const store = useStore()

// const fullscreenLoading = ref(false)

// 退出登录
const handleLogout = () => {
  const loading = ElLoading.service({
    lock: true,
    text: '稍等片刻～',
    background: 'rgba(0, 0, 0, 0.7)'
  })
  setTimeout(() => {
    store.dispatch('User/logout')
    loading.close()
  }, 1000)
}
</script>

<style lang="scss" scoped>
.navbar {
  height: 50px;
  overflow: hidden;
  position: relative;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);

  .hamburger-container {
    line-height: 46px;
    height: 100%;
    float: left;
    cursor: pointer;
    transition: background 0.5s;

    &:hover {
      background: rgba(0, 0, 0, 0.1);
    }
  }
  .breadcrumb-container {
    float: left;
  }

  .right-menu {
    display: flex;
    align-items: center;
    float: right;
    padding-right: 16px;

    ::v-deep .right-menu-item {
      display: inline-block;
      padding: 0 18px 0 0;
      font-size: 24px;
      color: #5a5e66;
      vertical-align: text-bottom;

      &.hover-effect {
        cursor: pointer;
      }
    }

    ::v-deep .avatar-container {
      cursor: pointer;
      .avatar-wrapper {
        margin-top: 5px;
        position: relative;
        .el-avatar {
          --el-avatar-background-color: none;
          margin-right: 12px;
        }
      }
    }
  }
}
</style>
