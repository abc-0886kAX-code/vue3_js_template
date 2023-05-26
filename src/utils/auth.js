/*
 * @FilePath: \vue3_js_template\src\utils\auth.js
 * @Author: SeaSpray
 * @Date: 2023-05-26 15:07:40
 * @LastEditors: SeaSpray
 * @LastEditTime: 2023-05-26 15:07:48
 * @Description: 
 */
import { router } from '@/router'

export function toLogin() {
  router.replace({ path: '/login' })
}
