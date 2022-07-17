<template>
  <el-dialog
    :title="$t('msg.excel.roleDialogTitle')"
    :model-value="modelValue"
    @close="closed"
  >
    <el-tree
      ref="treeRef"
      :data="permissionData"
      show-checkbox
      default-expand-all
      check-strictly
      node-key="id"
      :props="defaultProps"
    />

    <template #footer>
      <span class="dialog-footer">
        <el-button @click="closed">{{ $t('msg.universal.cancel') }}</el-button>
        <el-button type="primary" @click="onConfirm">{{
          $t('msg.universal.confirm')
        }}</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script setup>
import { defineProps, defineEmits, ref, watch } from 'vue'
import { permissionList } from '@/api/permission'
import { getPermissionById, distributePermission } from '@/api/role'
import { ElMessage } from 'element-plus'
import { useI18n } from 'vue-i18n'
import { watchSwitchLang } from '@/utils/i18n'

const props = defineProps({
  modelValue: {
    type: Boolean,
    required: true
  },
  roleId: {
    type: String,
    required: true
  }
})

// 权限列表
const permissionData = ref([])
const getPermissionList = async () => {
  permissionData.value = await permissionList()
}
getPermissionList()
watchSwitchLang(getPermissionList)

const treeRef = ref(null)
// 角色权限
const getRolePermisson = async () => {
  const checkedKeys = await getPermissionById(props.roleId)
  treeRef.value.setCheckedKeys(checkedKeys)
}

watch(
  () => props.roleId,
  (val) => val && getRolePermisson()
)

const defaultProps = {
  children: 'children',
  label: 'permissionName'
}

const emits = defineEmits(['update:modelValue'])
const i18n = useI18n()

// 确定按钮点击事件
const onConfirm = async () => {
  await distributePermission({
    permissions: treeRef.value.getCheckedKeys(),
    roleId: props.roleId
  })

  ElMessage.success(i18n.t('msg.role.updateRoleSuccess'))
  closed()
}

// 关闭
const closed = () => {
  emits('update:modelValue', false)
}
</script>
