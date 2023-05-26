/*
 * @FilePath: \vue3_js_template\vite.config.js
 * @Author: zhangxin
 * @Date: 2023-05-25 16:46:09
 * @LastEditors: zhangxin
 * @LastEditTime: 2023-05-26 09:30:31
 * @Description:
 */
import { defineConfig, loadEnv } from 'vite';
import { wrapperEnv, createProxy } from './build/utils';
import { createVitePlugins } from './build/plugin';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
    const isBuild = command === 'build';
    const env = loadEnv(mode, process.cwd());
    const viteEnv = wrapperEnv(env);

    // 这样就可以拿到定义好的环境变量了，也可以使用process.env.xxx这种方式进行访问
    const { VITE_PORT, VITE_PUBLIC_PATH, VITE_PROXY } = viteEnv;

    return {
        plugins: createVitePlugins(viteEnv, isBuild),
        base: VITE_PUBLIC_PATH || '/',
        resolve: {
            // 设置别名
            alias: {
                '@': path.resolve(__dirname, 'src'),
            },
        },
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: `@import '@/styles/variables.scss';`,
                },
            },
        },
        server: {
            host: '0.0.0.0', // 默认为'127.0.0.1'，如果将此设置为 `0.0.0.0` 或者 `true` 将监听所有地址，包括局域网和公网地址
            port: VITE_PORT, // 端口
            proxy: createProxy(VITE_PROXY), // 代理
        },
    };
});
