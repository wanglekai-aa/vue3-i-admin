import { ElMessage } from 'element-plus'
import axios from 'axios'
import store from '@/store'
import { isCheckTimeout } from './auth'

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000
})

// 请求拦截器
service.interceptors.request.use(
  (config) => {
    config.headers.icode = 'A353F300C8E83D1F'
    const token = store.getters.token
    if (token) {
      if (isCheckTimeout()) {
        // 主动检测 token 是否过期
        store.dispatch('User/logout')
        return Promise.reject(new Error('token 失效'))
      }
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => Promise.reject(error)
)

// 响应拦截器
service.interceptors.response.use(
  (response) => {
    const { success, message, data } = response.data
    //   要根据success的成功与否决定下面的操作
    if (success) {
      return data
    } else {
      // 业务错误
      ElMessage.error(message) // 提示错误消息
      return Promise.reject(new Error(message))
    }
  },
  (error) => {
    // 处理 token 超时问题
    if (error.response && error.response.data && error.response.code === 401) {
      store.dispatch('User/logout')
    }

    ElMessage.error(error.message) // 提示错误信息
    return Promise.reject(error)
  }
)

export default service
