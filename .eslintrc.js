/*
 * @FilePath: \vue3_template\.eslintrc.js
 * @Author: zhangxin
 * @Date: 2023-05-25 17:56:50
 * @LastEditors: zhangxin
 * @LastEditTime: 2023-05-26 09:05:11
 * @Description: 没有启作用
 */
module.exports = {
  root: true,
  extends: ['plugin:vue/vue3-recommended', 'plugin:prettier/recommended'],
  rules: {
    'prettier/prettier': 'warn',
    'vue/valid-template-root': 'off',
    'vue/no-multiple-template-root': 'off',
    'vue/multi-word-component-names': [
      'error',
      {
        ignores: ['index', '401', '404'],
      },
    ],
  },
}