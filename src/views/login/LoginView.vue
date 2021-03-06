<template>
  <div class="login-container">
    <el-form
      ref="loginFormRef"
      class="login-form"
      :model="loginForm"
      :rules="loginRules"
    >
      <div class="title-container">
        <h3 class="title">{{ $t('msg.login.title') }}</h3>
        <lang-select class="lang-select" />
      </div>

      <el-form-item prop="username">
        <span class="svg-container">
          <svg-icon icon="user" />
        </span>

        <el-input
          v-model="loginForm.username"
          placeholder="username"
          name="username"
          type="text"
        />
      </el-form-item>

      <el-form-item prop="password">
        <span class="svg-container">
          <svg-icon icon="password" />
        </span>
        <el-input
          v-model="loginForm.password"
          :type="passwordType"
          placeholder="password"
          name="password"
        />
        <span class="show-pwd">
          <svg-icon
            :icon="passwordType === 'password' ? 'eye' : 'eye-open'"
            @click="handleChangePwdType"
          />
        </span>
      </el-form-item>

      <el-button
        type="primary"
        style="width: 100%; margin-bottom: 30px"
        @click="handleLogin"
        :loading="loading"
        >{{ $t('msg.login.loginBtn') }}</el-button
      >
    </el-form>
  </div>
</template>

<script setup>
import LangSelect from '@/components/LangSelect/LangSelect.vue'
import { useStore } from 'vuex'
import { ref } from 'vue'
import { validatePassword } from './rules'
import router from '@/router'
import { useI18n } from 'vue-i18n'

const i18n = useI18n()

const loginForm = ref({
  username: 'super-admin',
  password: '123456'
})

const loginRules = ref({
  username: {
    required: true,
    trigger: 'blur',
    message: i18n.t('msg.login.usernameRule')
  },
  password: {
    required: true,
    trigger: 'blur',
    validator: validatePassword()
  }
})

// 密码框文本显示状态
const passwordType = ref('password')
const handleChangePwdType = () => {
  if (passwordType.value === 'password') {
    passwordType.value = 'text'
  } else {
    passwordType.value = 'password'
  }
}

const store = useStore()
const loginFormRef = ref(null)
const loading = ref(false)
// 登录处理
const handleLogin = () => {
  // 表单验证
  loginFormRef.value.validate((valid) => {
    if (!valid) return
    loading.value = true
    store
      .dispatch('User/login', loginForm.value)
      .then((res) => {
        // console.log('login success info: ', res)
        router.push('/')
      })
      .catch((err) => {
        console.log('login Error: ', err)
      })
      .finally(() => {
        loading.value = false
      })
  })
}
</script>

<style lang="scss" scoped>
$bg: #2d3a4b;
$dark_gray: #889aa4;
$light_gray: #eee;
$cursor: #fff;

.login-container {
  min-height: 100%;
  width: 100%;
  background-color: $bg;
  overflow: hidden;

  ::v-deep .lang-select {
    position: absolute;
    top: 8px;
    right: 6px;
    font-size: 26px;
    background-color: white;
  }

  .login-form {
    position: relative;
    width: 520px;
    max-width: 100%;
    padding: 160px 35px 0;
    margin: 0 auto;
    overflow: hidden;

    ::v-deep .el-form-item {
      border: 1px solid rgba(255, 255, 255, 0.1);
      background: rgba(0, 0, 0, 0.1);
      border-radius: 5px;
      color: #454545;
    }

    ::v-deep .el-input {
      display: inline-block;
      height: 47px;
      width: 85%;

      input {
        background: transparent;
        border: 0px;
        -webkit-appearance: none;
        border-radius: 0px;
        padding: 12px 5px 12px 15px;
        color: $light_gray;
        height: 47px;
        caret-color: $cursor;
      }
    }
  }

  .svg-container {
    padding: 6px 5px 6px 15px;
    color: $dark_gray;
    vertical-align: middle;
    display: inline-block;
  }

  .title-container {
    position: relative;

    .title {
      font-size: 26px;
      color: $light_gray;
      margin: 0px auto 40px auto;
      text-align: center;
      font-weight: bold;
    }
  }

  .show-pwd {
    position: absolute;
    right: 10px;
    top: 7px;
    font-size: 16px;
    color: $dark_gray;
    cursor: pointer;
    user-select: none;
  }
}
</style>
