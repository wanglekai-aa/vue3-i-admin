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
// 获取用户详情
export const userDetail = (id) => {
  return service({
    url: `/user-manage/detail/${id}`
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

// 获取指定用户角色
export const userRoles = (id) => {
  return service({
    url: `/user-manage/role/${id}`
  })
}

// 分用户分配角色
export const updateRole = (id, roles) => {
  return service({
    url: `/user-manage/update-role/${id}`,
    method: 'POST',
    data: {
      roles
    }
  })
}
