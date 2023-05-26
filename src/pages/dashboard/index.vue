<!--
 * @FilePath: \vue3_js_template\src\pages\dashboard\index.vue
 * @Author: SeaSpray
 * @Date: 2023-05-26 14:53:54
 * @LastEditors: SeaSpray
 * @LastEditTime: 2023-05-26 15:29:00
 * @Description: 
-->
<script setup>
import { usePermissionStore } from '@/store/modules/permission'
import { useUserStore } from '@/store/modules/user'
import { useMessage } from 'naive-ui'
const message = useMessage()

const permissionStore = usePermissionStore()
const userStore = useUserStore()

function logout() {
  userStore.logout()
  message.success('已退出登录')
}
</script>
<template>
  <div p-35>
    <n-gradient-text flex items-center text-26 type="info">
      我的角色是：<n-gradient-text type="error">{{ userStore.name }}</n-gradient-text>
    </n-gradient-text>

    <n-gradient-text text-16 mt-10 type="info">我有这些页面的权限：</n-gradient-text>

    <ul mt-10>
      <li
        v-for="item in permissionStore.menus"
        :key="item.name"
        cursor-pointer
        hover-color-red
        @click="$router.push(item.path)"
      >
        {{ item.meta?.title }}
      </li>
    </ul>

    <n-button type="info" mt-20 size="small" @click="logout">换个角色看看</n-button>
  </div>
</template>
