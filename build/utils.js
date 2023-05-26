/*
 * @FilePath: \vue3_template\build\utils.js
 * @Author: zhangxin
 * @Date: 2023-05-25 16:53:12
 * @LastEditors: zhangxin
 * @LastEditTime: 2023-05-25 17:25:11
 * @Description:
 */
export function wrapperEnv(envOptions) {
    if (!envOptions) return {};
    const rst = {};

    for (const key in envOptions) {
        let val = envOptions[key];
        if (['true', 'false'].includes(val)) {
            val = val === 'true';
        }
        if (['VITE_PORT'].includes(key)) {
            val = +val;
        }
        if (key === 'VITE_PROXY' && val) {
            try {
                val = JSON.parse(val.replace(/'/g, '"'));
            } catch (error) {
                val = '';
            }
        }
        rst[key] = val;
        if (typeof key === 'string') {
            process.env[key] = val;
        } else if (typeof key === 'object') {
            process.env[key] = JSON.stringify(val);
        }
    }
    return rst;
}

const httpsReg = /^https:\/\//;

export function createProxy(list = []) {
    const rst = {};
    for (const [prefix, target] of list) {
        const isHttps = httpsReg.test(target);

        // https://github.com/http-party/node-http-proxy#options
        rst[prefix] = {
            target: target,
            changeOrigin: true,
            ws: true,
            rewrite: path => path.replace(new RegExp(`^${prefix}`), ''),
            // https is require secure=false
            ...(isHttps ? { secure: false } : {}),
        };
    }
    return rst;
}
