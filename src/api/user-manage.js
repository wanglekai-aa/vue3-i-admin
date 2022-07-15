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

// 批量导入
export const userBatchImport = (data) => {
  return service({
    url: '/user-manage/batch/import',
    method: 'POST',
    data
  })
}
