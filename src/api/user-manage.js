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
// 获取所有用户列表数据
export const getUserManageAllList = () => {
  return service({
    url: '/user-manage/all-list'
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

// 删除指定数据
export const deleteUser = (id) => {
  return service({
    url: `/user-manage/detele/${id}`
  })
}
