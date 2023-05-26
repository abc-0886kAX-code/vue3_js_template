/*
 * @FilePath: \vue3_js_template\src\router\index.js
 * @Author: SeaSpray
 * @Date: 2023-05-26 14:54:53
 * @LastEditors: SeaSpray
 * @LastEditTime: 2023-05-26 16:52:25
 * @Description:
 */
import { createRouter, createWebHashHistory } from 'vue-router'
import { setupRouterGuard } from './guard'

export const basicRoutes = [
  {
    name: '404',
    path: '/404',
    component: () => import('@/pages/error-page/404.vue'),
    isHidden: true,
  },
  {
    name: 'LOGIN',
    path: '/login',
    component: () => import('@/layout/login/index.vue'),
    isHidden: true,
    meta: {
      title: '登录页',
    },
  },

  {
    name: 'Dashboard',
    path: '/',
    component: () => import('@/pages/dashboard/index.vue'),
    meta: {
      title: 'Dashboard',
    },
  },

  {
    name: 'TestUnocss',
    path: '/test/unocss',
    component: () => import('@/pages/test-page/unocss/index.vue'),
    meta: {
      title: '测试unocss',
    },
  },
]


export const NOT_FOUND_ROUTE = {
  name: 'NotFound',
  path: '/:pathMatch(.*)*',
  redirect: '/404',
  isHidden: true,
}

export const router = createRouter({
  history: createWebHashHistory('/'),
  routes:basicRoutes,
  scrollBehavior: () => ({ left: 0, top: 0 }),
})

export function setupRouter(app) {
  app.use(router)
  setupRouterGuard(router)
}

// modules文件夹下的路由都会作为动态路由
const modules = import.meta.globEager('./modules/*.js')
const asyncRoutes = []
Object.keys(modules).forEach((key) => {
  asyncRoutes.push(...modules[key].default)
})

export { asyncRoutes }
