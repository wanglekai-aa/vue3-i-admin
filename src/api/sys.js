import service from '@/utils/request'

// 登录
export const login = (data) => {
  return service({
    url: '/sys/login',
    method: 'POST',
    data
  })
}

// 获取用户信息
export const getUserInfo = () => {
  return service({
    url: '/sys/profile'
  })
}
