/*
 * @FilePath: \vue3_js_template\src\api\auth\index.js
 * @Author: SeaSpray
 * @Date: 2023-05-26 15:10:45
 * @LastEditors: SeaSpray
 * @LastEditTime: 2023-05-26 15:11:07
 * @Description: 
 */
import { defAxios as request } from '@/utils/http'

export const login = (data) => {
  return request({
    url: '/auth/login',
    method: 'post',
    data,
  })
}

export const refreshToken = () => {
  return request({
    url: '/auth/refreshToken',
    method: 'post',
  })
}
