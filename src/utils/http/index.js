/*
 * @FilePath: \vue3_js_template\src\utils\http\index.js
 * @Author: SeaSpray
 * @Date: 2023-05-26 14:06:15
 * @LastEditors: SeaSpray
 * @LastEditTime: 2023-05-26 14:06:36
 * @Description: 
 */
import axios from 'axios'
import { resResolve, resReject, reqResolve, reqReject } from './interceptors'

export function createAxios(options = {}) {
  const defaultOptions = {
    baseURL: import.meta.env.VITE_APP_BASE_API,
    timeout: 12000,
  }
  const service = axios.create({
    ...defaultOptions,
    ...options,
  })
  service.interceptors.request.use(reqResolve, reqReject)
  service.interceptors.response.use(resResolve, resReject)
  return service
}

export const defAxios = createAxios()

export const testAxios = createAxios({
  baseURL: import.meta.env.VITE_APP_BASE_API_TEST,
})