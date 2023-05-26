<!--
 * @FilePath: \vue3_js_template\src\App.vue
 * @Author: zhangxin
 * @Date: 2023-05-25 16:46:09
 * @LastEditors: zhangxin
 * @LastEditTime: 2023-05-26 13:08:01
 * @Description: 
-->
<script setup>
import AppProvider from "@/components/AppProvider";
import { onMounted } from 'vue'

onMounted(() => {
  console.log($loadingBar);
  $loadingBar.start()
  setTimeout(() => {
    $loadingBar.finish()
    $message.success('加载完成，Perfect~')
  }, 500)
})
</script>

<template>
<AppProvider>
  <n-space m-50>
    <n-button>Default</n-button>
    <n-button type="tertiary"> Tertiary </n-button>
    <n-button type="primary"> Primary </n-button>
    <n-button type="info"> Info </n-button>
    <n-button type="success"> Success </n-button>
    <n-button type="warning"> Warning </n-button>
    <n-button type="error"> Error </n-button>
  </n-space>
  </AppProvider>
</template>

<style scoped lang='scss'>

</style>