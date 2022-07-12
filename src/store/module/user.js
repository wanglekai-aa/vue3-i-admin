// 处理所有和 用户相关 的内容
import { TOKEN } from '@/constant'
import { setItem, getItem } from '@/utils/storage'
import { login, getUserInfo } from '@/api/sys'
import md5 from 'md5'
export default {
  namespaced: true,
  state: () => ({
    token: getItem(TOKEN) || '',
    userInfo: {}
  }),
  mutations: {
    setToken(state, token) {
      state.token = token
      setItem(TOKEN, token)
    },
    setUserInfo(state, userInfo) {
      state.userInfo = userInfo
    }
  },
  actions: {
    login(context, userInfo) {
      const { username, password } = userInfo
      return new Promise((resolve, reject) => {
        login({
          username,
          password: md5(password)
        })
          .then((data) => {
            this.commit('User/setToken', data.token)
            resolve(data)
          })
          .catch((err) => {
            reject(err)
          })
      })
    },
    async getUserInfo() {
      const res = await getUserInfo()
      this.commit('User/setUserInfo', res)
      return res
    }
  }
}
