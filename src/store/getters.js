import { MAIN_COLOR } from '@/constant'
import { getItem } from '@/utils/storage'
import { generateColors } from '@/utils/theme'

const getters = {
  token: (state) => state.User.token,
  userInfo: (state) => state.User.userInfo,
  // 用户信息是否存在
  hasUserInfo: (state) => JSON.stringify(state.User.userInfo) !== '{}',
  cssVar: (state) => {
    return {
      ...state.Theme.variables,
      ...generateColors(getItem(MAIN_COLOR))
    }
  },
  sidebarOpened: (state) => state.App.sidebarOpened,
  language: (state) => state.App.language,
  mainColor: (state) => state.Theme.mainColor
}

export default getters
