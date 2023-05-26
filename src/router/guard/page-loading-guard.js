/*
 * @FilePath: \vue3_js_template\src\router\guard\page-loading-guard.js
 * @Author: SeaSpray
 * @Date: 2023-05-26 15:20:28
 * @LastEditors: SeaSpray
 * @LastEditTime: 2023-05-26 15:32:40
 * @Description: 
 */
import { createDiscreteApi } from 'naive-ui'
const {loadingBar} = createDiscreteApi(['loadingBar'])

export function createPageLoadingGuard(router) {
  router.beforeEach(() => {
    loadingBar?.start()
  })

  router.afterEach(() => {
    setTimeout(() => {
      loadingBar?.finish()
    }, 200)
  })

  router.onError(() => {
    loadingBar?.error()
  })
}
