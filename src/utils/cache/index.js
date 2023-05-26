/*
 * @FilePath: \vue3_js_template\src\utils\cache\index.js
 * @Author: zhangxin
 * @Date: 2023-05-26 14:01:51
 * @LastEditors: zhangxin
 * @LastEditTime: 2023-05-26 14:02:36
 * @Description: 
 */
import { createStorage } from './storage'

const prefixKey = 'VUE3_JS_TEMPLATE_'

export const createLocalStorage = function (option = {}) {
  return createStorage({
    prefixKey: option.prefixKey || '',
    storage: localStorage,
  })
}

export const createSessionStorage = function (option = {}) {
  return createStorage({
    prefixKey: option.prefixKey || '',
    storage: sessionStorage,
  })
}

export const lStorage = createLocalStorage({ prefixKey })

export const sStorage = createSessionStorage({ prefixKey })
