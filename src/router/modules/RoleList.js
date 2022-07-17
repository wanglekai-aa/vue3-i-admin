import layout from '@/views/layout/layoutView.vue'

export default {
  path: '/user',
  component: layout,
  redirect: '/user/manage',
  name: 'roleList',
  meta: {
    title: 'user',
    icon: 'personnel'
  },
  children: [
    {
      path: '/user/role',
      component: () => import('@/views/role-list/RoleList.vue'),
      meta: {
        title: 'roleList',
        icon: 'role'
      }
    }
  ]
}
