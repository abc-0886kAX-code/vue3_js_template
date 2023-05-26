/*
 * @FilePath: \vue3_js_template\build\plugin\mock.js
 * @Author: SeaSpray
 * @Date: 2023-05-26 14:27:28
 * @LastEditors: SeaSpray
 * @LastEditTime: 2023-05-26 14:27:43
 * @Description: 
 */
import { viteMockServe } from 'vite-plugin-mock'

export function configMockPlugin(isBuild) {
  return viteMockServe({
    mockPath: 'mock/modules',
    localEnabled: !isBuild,
    prodEnabled: isBuild,
    injectCode: `
      import { setupProdMockServer } from '../mock';
      setupProdMockServer();
    `,
  })
}
