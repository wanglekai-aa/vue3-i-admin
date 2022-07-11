// 处理所有和 用户相关 的内容
import { TOKEN } from '@/constant'
import { setItem, getItem } from '@/utils/storage'
import { login } from '@/api/sys'
import md5 from 'md5'
export default {
  namespaced: true,
  state: () => ({
    token: getItem(TOKEN) || ''
  }),
  mutations: {
    setToken(state, token) {
      state.token = token
      setItem(TOKEN, token)
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
          .then((res) => {
            this.commit('User/setToken', res.data.data.token)
            resolve(res.data)
          })
          .catch((err) => {
            reject(err)
          })
      })
    }
  }
}
