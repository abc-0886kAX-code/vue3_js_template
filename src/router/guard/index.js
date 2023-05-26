/*
 * @FilePath: \vue3_js_template\src\router\guard\index.js
 * @Author: SeaSpray
 * @Date: 2023-05-26 15:20:17
 * @LastEditors: SeaSpray
 * @LastEditTime: 2023-05-26 15:22:50
 * @Description: 
 */
import { createPageLoadingGuard } from './page-loading-guard'
import { createPageTitleGuard } from './page-title-guard'
import { createPermissionGuard } from './permission-guard'

export function setupRouterGuard(router) {
  createPageLoadingGuard(router)
  createPermissionGuard(router)
  createPageTitleGuard(router)
}
