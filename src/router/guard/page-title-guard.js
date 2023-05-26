/*
 * @FilePath: \vue3_js_template\src\router\guard\page-title-guard.js
 * @Author: SeaSpray
 * @Date: 2023-05-26 15:20:36
 * @LastEditors: SeaSpray
 * @LastEditTime: 2023-05-26 15:21:50
 * @Description: 
 */
const baseTitle = import.meta.env.VITE_APP_TITLE

export function createPageTitleGuard(router) {
  router.afterEach((to) => {
    const pageTitle = to.meta?.title
    if (pageTitle) {
      document.title = `${pageTitle} | ${baseTitle}`
    } else {
      document.title = baseTitle
    }
  })
}
