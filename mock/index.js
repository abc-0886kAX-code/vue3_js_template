/*
 * @FilePath: \vue3_js_template\mock\index.js
 * @Author: SeaSpray
 * @Date: 2023-05-26 14:08:44
 * @LastEditors: SeaSpray
 * @LastEditTime: 2023-05-26 14:26:19
 * @Description: 
 */
import { createProdMockServer } from 'vite-plugin-mock/es/createProdMockServer'

const modules = import.meta.globEager('./modules/*.js')
const mockModules = []
Object.keys(modules).forEach((key) => {
  mockModules.push(...modules[key].default)
})

export function setupProdMockServer() {
  createProdMockServer(mockModules)
}
