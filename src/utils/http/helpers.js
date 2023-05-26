/*
 * @FilePath: \vue3_js_template\src\utils\http\helpers.js
 * @Author: SeaSpray
 * @Date: 2023-05-26 15:15:56
 * @LastEditors: SeaSpray
 * @LastEditTime: 2023-05-26 15:16:12
 * @Description: 
 */
import { useUserStore } from '@/store/modules/user'

const WITHOUT_TOKEN_API = [{ url: '/auth/login', method: 'POST' }]

export function isWithoutToken({ url, method = '' }) {
  return WITHOUT_TOKEN_API.some((item) => item.url === url && item.method === method.toUpperCase())
}

export function addBaseParams(params) {
  if (!params.userId) {
    params.userId = useUserStore().userId
  }
}
