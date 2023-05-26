<!--
 * @FilePath: \vue3_js_template\src\components\AppProvider\index.vue
 * @Author: zhangxin
 * @Date: 2023-05-26 09:10:59
 * @LastEditors: zhangxin
 * @LastEditTime: 2023-05-26 13:55:02
 * @Description: 
-->
<script setup>
const themeOverrides = {
  common: {
    primaryColor: '#316C72FF',
    primaryColorHover: '#316C72E3',
    primaryColorPressed: '#2B4C59FF',
    primaryColorSuppl: '#316C7263',
  },
}
</script>

<template>
  <n-config-provider :theme-overrides="themeOverrides">
    <n-loading-bar-provider>
      <n-dialog-provider>
        <n-notification-provider>
          <n-message-provider>
            <slot></slot>
          </n-message-provider>
        </n-notification-provider>
      </n-dialog-provider>
    </n-loading-bar-provider>
  </n-config-provider>

</template>
<style scoped lang='scss'>

</style>