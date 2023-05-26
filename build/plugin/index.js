/*
 * @FilePath: \vue3_template\build\plugin\index.js
 * @Author: zhangxin
 * @Date: 2023-05-25 17:32:58
 * @LastEditors: zhangxin
 * @LastEditTime: 2023-05-26 09:08:01
 * @Description:
 */
import vue from '@vitejs/plugin-vue';

/**
 * * 扩展setup插件，支持在script标签中使用name属性
 * usage: <script setup name="MyComp"></script>
 */
import VueSetupExtend from 'vite-plugin-vue-setup-extend';
// rollup打包分析插件
import { visualizer } from 'rollup-plugin-visualizer';

import { configHtmlPlugin } from './html';

import { unocss } from './unocss';

import Components from "unplugin-vue-components/vite";

import { NaiveUiResolver } from "unplugin-vue-components/resolvers";

export function createVitePlugins(viteEnv, isBuild) {
    const plugins = [vue(), VueSetupExtend(), configHtmlPlugin(viteEnv, isBuild), unocss(),Components({
        resolvers: [NaiveUiResolver()],
    })];

    if (isBuild) {
        plugins.push(
            visualizer({
                open: true,
                gzipSize: true,
                brotliSize: true,
            })
        );
    }
    return plugins;
}
