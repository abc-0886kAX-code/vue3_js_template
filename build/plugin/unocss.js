/*
 * @FilePath: \vue3_template\build\plugin\unocss.js
 * @Author: zhangxin
 * @Date: 2023-05-25 17:52:14
 * @LastEditors: zhangxin
 * @LastEditTime: 2023-05-25 17:52:23
 * @Description:
 */
import Unocss from 'unocss/vite';
import { presetUno, presetAttributify, presetIcons } from 'unocss';

export function unocss() {
    return Unocss({
        presets: [presetUno(), presetAttributify(), presetIcons()],
    });
}
