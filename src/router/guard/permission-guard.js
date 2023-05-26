/*
 * @FilePath: \vue3_js_template\src\router\guard\permission-guard.js
 * @Author: SeaSpray
 * @Date: 2023-05-26 15:20:47
 * @LastEditors: SeaSpray
 * @LastEditTime: 2023-05-26 15:31:52
 * @Description: 
 */
import { useUserStore } from '@/store/modules/user'
import { usePermissionStore } from '@/store/modules/permission'
import { NOT_FOUND_ROUTE } from '@/router'
import { getToken, removeToken } from '@/utils/token'
import { toLogin } from '@/utils/auth'

import { createDiscreteApi } from 'naive-ui'
const {message} = createDiscreteApi(['message'])

const WHITE_LIST = ['/login']
export function createPermissionGuard(router) {
  const userStore = useUserStore()
  const permissionStore = usePermissionStore()
  router.beforeEach(async (to, from, next) => {
    const token = getToken()
    if (token) {
      if (to.path === '/login') {
        next({ path: '/' })
      } else {
        if (userStore.userId) {
          // 已经拿到用户信息
          next()
        } else {
          await userStore.getUserInfo().catch((error) => {
            removeToken()
            toLogin()
            message.error(error.message || '获取用户信息失败！')
            return
          })
          const accessRoutes = permissionStore.generateRoutes(userStore.role)
          accessRoutes.forEach((route) => {
            !router.hasRoute(route.name) && router.addRoute(route)
          })
          router.addRoute(NOT_FOUND_ROUTE)
          next({ ...to, replace: true })
        }
      }
    } else {
      if (WHITE_LIST.includes(to.path)) {
        next()
      } else {
        next({ path: '/login' })
      }
    }
  })
}
