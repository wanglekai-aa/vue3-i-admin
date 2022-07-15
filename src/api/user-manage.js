import service from '@/utils/request'

/**
 * 获取用户列表数据
 */
export const getUserManageList = (data) => {
  return service({
    url: '/user-manage/list',
    params: data
  })
}
