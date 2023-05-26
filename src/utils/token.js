/*
 * @FilePath: \vue3_js_template\src\utils\token.js
 * @Author: zhangxin
 * @Date: 2023-05-26 14:03:14
 * @LastEditors: zhangxin
 * @LastEditTime: 2023-05-26 14:03:54
 * @Description: 
 */
import { lStorage } from './cache'

const TOKEN_CODE = 'SeaSpray_token'
const DURATION = 6 * 60 * 60

export function getToken() {
  return lStorage.get(TOKEN_CODE)
}

export function setToken(token) {
  lStorage.set(TOKEN_CODE, token, DURATION)
}

export function removeToken() {
  lStorage.remove(TOKEN_CODE)
}
