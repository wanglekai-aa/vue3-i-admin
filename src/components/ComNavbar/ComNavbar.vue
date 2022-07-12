<template>
  <div class="navbar">
    <ham-burger class="hamburger-container" />

    <bread-crumb class="breadcrumb-container" />

    <div class="right-menu">
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
              <el-dropdown-item> 首页 </el-dropdown-item>
            </router-link>
            <a target="_blank" href="">
              <el-dropdown-item>课程主页</el-dropdown-item>
            </a>
            <el-dropdown-item divided @click="handleLogout">
              退出登录
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
