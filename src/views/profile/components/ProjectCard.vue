<template>
  <!-- <div>项目介绍</div> -->
  <pan-thumb
    :image="require('@/assets/logo.jpg')"
    :height="'100px'"
    :width="'100px'"
    :hoverable="false"
  >
    <div>Hello</div>
    {{ $store.getters.userInfo.title }}
  </pan-thumb>
</template>

<script setup>
import PanThumb from '@/components/PanThumb/PanThumb.vue'
</script>
