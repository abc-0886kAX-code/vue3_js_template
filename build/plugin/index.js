/*
 * @FilePath: \vue3_js_template\build\plugin\index.js
 * @Author: zhangxin
 * @Date: 2023-05-25 17:32:58
 * @LastEditors: SeaSpray
 * @LastEditTime: 2023-05-26 17:03:53
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

import { configMockPlugin } from './mock';

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

    if(viteEnv?.VITE_APP_USE_MOCK){
        plugins.push(configMockPlugin(isBuild));
    }

    return plugins;
}
