import { SIDEBAR_OPENED, LANG, TAGS_VIEW } from '@/constant'
import { setItem, getItem } from '@/utils/storage'

export default {
  namespaced: true,
  state: () => ({
    sidebarOpened: getItem(SIDEBAR_OPENED),
    language: getItem(LANG) || 'zh',
    tagsViewList: getItem(TAGS_VIEW) || []
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
    },
    // 添加 tags
    addTagsViewList(state, tag) {
      const isFind = state.tagsViewList.find((item) => {
        return item.path === tag.path
      })
      // 处理重复
      if (!isFind) {
        state.tagsViewList.push(tag)
        setItem(TAGS_VIEW, state.tagsViewList)
      }
    },
    // 为指定的 tag 修改 title
    changeTagsView(state, { index, tag }) {
      state.tagsViewList[index] = tag
      setItem(TAGS_VIEW, state.tagsViewList)
    }
  },
  actions: {}
}
