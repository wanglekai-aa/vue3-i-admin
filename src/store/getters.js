import variables from '@/styles/variables.module.scss'

const getters = {
  token: (state) => state.User.token,
  userInfo: (state) => state.User.userInfo,
  // 用户信息是否存在
  hasUserInfo: (state) => JSON.stringify(state.User.userInfo) !== '{}',
  cssVar: () => variables,
  sidebarOpened: (state) => state.App.sidebarOpened,
  language: (state) => state.App.language,
  mainColor: (state) => state.Theme.mainColor
}

export default getters
