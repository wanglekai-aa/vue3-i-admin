import { SIDEBAR_OPENED } from '@/constant'
import { setItem, getItem } from '@/utils/storage'

export default {
  namespaced: true,
  state: () => ({
    sidebarOpened: getItem(SIDEBAR_OPENED)
  }),
  mutations: {
    triggerSidebarOpened(state) {
      state.sidebarOpened = !state.sidebarOpened
      console.log(state.sidebarOpened)
      setItem(SIDEBAR_OPENED, state.sidebarOpened)
    }
  },
  actions: {}
}
