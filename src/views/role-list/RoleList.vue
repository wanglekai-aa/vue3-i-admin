<template>
  <div>
    <el-card>
      <el-table :data="allRoles" border style="width: 100%">
        <el-table-column :label="$t('msg.role.index')" type="index" width="120">
        </el-table-column>
        <el-table-column :label="$t('msg.role.name')" prop="title">
        </el-table-column>
        <el-table-column :label="$t('msg.role.desc')" prop="describe">
        </el-table-column>
        <el-table-column
          :label="$t('msg.role.action')"
          prop="action"
          width="260"
          v-slot="{ row }"
        >
          <el-button
            v-permission="['distributePermission']"
            type="primary"
            size="mini"
            @click="onDistributePermissionClick(row)"
          >
            {{ $t('msg.role.assignPermissions') }}
          </el-button>
        </el-table-column>
      </el-table>
    </el-card>
    <distribute-permission
      :roleId="roleId"
      v-model="distributePermissionVisible"
    />
  </div>
</template>

<script setup>
import { roleList } from '@/api/role'
import { watchSwitchLang } from '@/utils/i18n'
import { ref } from 'vue'
import DistributePermission from './DistributePermission.vue'

const allRoles = ref([])
const getRoleList = async () => {
  allRoles.value = await roleList()
}
getRoleList()
watchSwitchLang(getRoleList)

const roleId = ref('')

// 分配权限
const distributePermissionVisible = ref(false)
const onDistributePermissionClick = (row) => {
  roleId.value = row.id
  distributePermissionVisible.value = true
}
</script>

<style lang="scss" scoped></style>
