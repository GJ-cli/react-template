/*
 * @Descripttion :
 * @version      : v1.0
 * @Author       : 段雄飞
 * @Date         : 2021-10-27 13:28:34
 * @LastEditors  : 段雄飞
 * @LastEditTime : 2021-11-15 11:35:17
 */
import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import windiCSS from 'vite-plugin-windicss'
import { resolve } from 'path'
import colors from 'colors'

import development from './src/config/development'
import stage from './src/config/stage'
import production from './src/config/production'

const envConf = {
    development,
    stage,
    production,
}

export default ({ mode }) => {
    const env = loadEnv(mode, process.cwd()).VITE_ENV
    console.log('当前环境：', colors.rainbow(env))
    console.log('当前环境配置：', envConf[env])
    return defineConfig({
        plugins: [react(), windiCSS()],

        // 打包配置
        build: {
            baseUrl: '/',
            manifest: true,
            target: 'es2015', // 设置最终构建的浏览器兼容目标，默认modules，
            outDir: 'dist', // 指定输出路径
            cssCodeSplit: true, // 启用/禁用 CSS 代码拆分
            assetsDir: 'assets', // 指定生成静态资源的存放路径
            minify: 'terser', // 混淆器，terser构建后文件体积更小
            sourcemap: env === 'production',
            terserOptions: {
                sourceMap: env === 'production',
                compress: {
                    drop_console: env === 'production', // 去除console
                    drop_debugger: true, // 去除debugger
                    pure_funcs: [
                        'console.log',
                        'console.marn',
                        'console.error',
                    ],
                },
            },
        },

        resolve: {
            alias: [{ find: '@', replacement: resolve(__dirname, 'src') }],
        },
        server: {
            port: envConf[env].port, // 设置服务启动端口号
            open: true, // 设置服务启动时是否自动打开浏览器
            cors: true, // 允许跨域
            host: '0.0.0.0',
            hmr: {
                overlay: false,
            },
            // 本地开发环境设置代理
            proxy: {
                '/bj': {
                    target: envConf[env].httpRequestURL,
                    changeOrigin: true,
                    secure: false,
                    rewrite: (path) => path.replace('/bj', ''),
                },
            },
        },
    })
}
