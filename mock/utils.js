/*
 * @FilePath: \vue3_js_template\mock\utils.js
 * @Author: SeaSpray
 * @Date: 2023-05-26 14:08:58
 * @LastEditors: SeaSpray
 * @LastEditTime: 2023-05-26 14:26:34
 * @Description: 
 */
export function resolveToken(authorization) {
  /**
   * * jwt token
   * * Bearer + token
   * ! 认证方案: Bearer
   */
  const reqTokenSplit = authorization.split(' ')
  if (reqTokenSplit.length === 2) {
    return reqTokenSplit[1]
  }
  return ''
}
