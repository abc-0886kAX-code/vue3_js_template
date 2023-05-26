/*
 * @FilePath: \vue3_js_template\src\main.js
 * @Author: zhangxin
 * @Date: 2023-05-26 09:28:44
 * @LastEditors: SeaSpray
 * @LastEditTime: 2023-05-26 14:56:17
 * @Description: 
 */
import { createApp } from 'vue'
import App from './App.vue'
import { setupRouter } from '@/router'
import '@/styles/index.scss';
import 'uno.css'


const app = createApp(App)

setupRouter(app)

app.mount('#app')
