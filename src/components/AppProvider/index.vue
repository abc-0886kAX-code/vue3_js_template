<!--
 * @FilePath: \vue3_template\src\components\AppProvider\index.vue
 * @Author: zhangxin
 * @Date: 2023-05-26 09:10:59
 * @LastEditors: zhangxin
 * @LastEditTime: 2023-05-26 09:11:48
 * @Description: 
-->
<script setup lang='ts'>
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
    <slot></slot>
  </n-config-provider>
</template>

<style scoped lang='scss'>

</style>