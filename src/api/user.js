import servcie from '@/utils/request'

// 功能介绍
export const feature = () => {
  return servcie({
    url: '/user/feature'
  })
}

// 章节内容
export const chapter = () => {
  return servcie({
    url: '/user/chapter'
  })
}
