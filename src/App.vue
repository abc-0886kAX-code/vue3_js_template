<!--
 * @FilePath: \vue3_js_template\src\App.vue
 * @Author: zhangxin
 * @Date: 2023-05-25 16:46:09
 * @LastEditors: SeaSpray
 * @LastEditTime: 2023-05-26 15:06:25
 * @Description: 
-->
<script setup>
import AppProvider from "@/components/AppProvider";
</script>

<template>
<AppProvider>
  <RouterView/>
  </AppProvider>
</template>

<style scoped lang='scss'>

</style>