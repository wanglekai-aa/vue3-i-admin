import servcie from '@/utils/request'

export const feature = () => {
  return servcie({
    url: '/user/feature'
  })
}
