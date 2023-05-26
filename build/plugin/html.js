/*
 * @FilePath: \vue3_template\build\plugin\html.js
 * @Author: zhangxin
 * @Date: 2023-05-25 17:46:24
 * @LastEditors: zhangxin
 * @LastEditTime: 2023-05-25 17:50:21
 * @Description:
 */
import { createHtmlPlugin } from 'vite-plugin-html';

export function configHtmlPlugin(viteEnv, isBuild) {
    const { VITE_APP_TITLE } = viteEnv;
    const htmlPlugin = createHtmlPlugin({
        minify: isBuild,
        inject: {
            data: {
                title: VITE_APP_TITLE,
            },
        },
    });
    return htmlPlugin;
}
