export const basicRoutes = [
  {
    name: 'LOGIN',
    path: '/login',
    component: () => import('@/pages/login/index.vue'),
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
