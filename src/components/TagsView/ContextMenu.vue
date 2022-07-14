<template>
  <ul class="context-menu-container">
    <li @click="onRefreshClick">
      {{ $t('msg.tagsView.refresh') }}
    </li>
    <li @click="onCloseRightClick(index)">
      {{ $t('msg.tagsView.closeRight') }}
    </li>
    <li @click="onCloseOtherClick(index)">
      {{ $t('msg.tagsView.closeOther') }}
    </li>
  </ul>
</template>

<script setup>
import { defineProps } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
defineProps({
  index: {
    type: Number,
    required: true
  }
})
const store = useStore()
// 关闭 右侧tag 的点击事件
const onCloseRightClick = (index) => {
  store.commit('App/removeTagsView', {
    type: 'right',
    index
  })
}

// 刷新
const router = useRouter()
const onRefreshClick = () => {
  router.go(0)
}

// 关闭其他 tags
const onCloseOtherClick = (index) => {
  store.commit('App/removeTagsView', {
    type: 'other',
    index
  })
}
</script>

<style lang="scss" scoped>
.context-menu-container {
  position: fixed;
  background: #fff;
  z-index: 3000;
  list-style-type: none;
  padding: 5px 0;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 400;
  color: #333;
  box-shadow: 2px 2px 3px 0 rgba(0, 0, 0, 0.3);
  li {
    margin: 0;
    padding: 7px 16px;
    cursor: pointer;
    &:hover {
      background: #eee;
    }
  }
}
</style>
