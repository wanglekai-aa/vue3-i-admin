<template>
  <div class="my-container">
    <el-row>
      <el-col :span="6">
        <project-card class="user-card" :features="featureData"></project-card>
      </el-col>
      <el-col :span="18">
        <el-card>
          <el-tabs v-model="activeName">
            <el-tab-pane :label="$t('msg.profile.feature')" name="feature">
              <project-feature :features="featureData" />
            </el-tab-pane>
            <el-tab-pane :label="$t('msg.profile.chapter')" name="chapter">
              <project-chapter />
            </el-tab-pane>
            <el-tab-pane :label="$t('msg.profile.author')" name="author">
              <project-author />
            </el-tab-pane>
          </el-tabs>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
import ProjectCard from './components/ProjectCard.vue'
import ProjectChapter from './components/ProjectChapter.vue'
import ProjectFeature from './components/ProjectFeature.vue'
import ProjectAuthor from './components/ProjectAuthor.vue'
import { ref } from 'vue'
import { feature } from '@/api/user'
import { watchSwitchLang } from '@/utils/i18n'

const activeName = ref('feature')

const featureData = ref([])
const getFeatureData = async () => {
  featureData.value = await feature()
}
getFeatureData()

// 监听语言切换
watchSwitchLang(getFeatureData)
</script>

<style lang="scss" scoped>
.my-container {
  .user-card {
    margin-right: 20px;
  }
}
</style>
