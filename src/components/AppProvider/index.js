/*
 * @FilePath: \vue3_js_template\src\components\AppProvider\index.js
 * @Author: zhangxin
 * @Date: 2023-05-26 09:15:10
 * @LastEditors: zhangxin
 * @LastEditTime: 2023-05-26 09:53:20
 * @Description: 
 */
import { defineAsyncComponent } from "vue";
export const AppProvider = defineAsyncComponent(() => import("./index.vue"));
export default AppProvider;