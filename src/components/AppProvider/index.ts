/*
 * @FilePath: \vue3_template\src\components\AppProvider\index.ts
 * @Author: zhangxin
 * @Date: 2023-05-26 09:15:10
 * @LastEditors: zhangxin
 * @LastEditTime: 2023-05-26 09:17:55
 * @Description: 
 */
import { defineComponent } from "vue";
export const AppProvider = defineComponent(() => import("./index.vue"));
export default AppProvider;