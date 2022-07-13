import { SIDEBAR_OPENED, LANG } from '@/constant'
import { setItem, getItem } from '@/utils/storage'

export default {
  namespaced: true,
  state: () => ({
    sidebarOpened: getItem(SIDEBAR_OPENED),
    language: getItem(LANG) || 'zh'
  }),
  mutations: {
    // 切换侧边栏的收缩状态
    triggerSidebarOpened(state) {
      state.sidebarOpened = !state.sidebarOpened
      setItem(SIDEBAR_OPENED, state.sidebarOpened)
    },
    // 设置语言
    setLanguage(state, lang) {
      setItem(LANG, lang)
      state.language = lang
    }
  },
  actions: {}
}
