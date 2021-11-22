/*
 * @Descripttion :
 * @version      : v1.0
 * @Author       : 段雄飞
 * @Date         : 2021-11-12 14:42:42
 * @LastEditors  : 段雄飞
 * @LastEditTime : 2021-11-16 20:16:33
 */
import { defineConfig } from 'windicss/helpers'

export default defineConfig({
    preflight: true, // 样式重置
    extract: {
        include: ['src/**/*.{html,jsx,tsx}'],
        exclude: ['node_modules', '.git'],
    },
    darkMode: 'class',
    safelist: 'p-3 p-4 p-5',
    theme: {
        extend: {
            colors: {
                'primary-color': '#FE6058', // 主题色
                'success-color': '#00A263', // 成功色
                'warning-color': '#FF6F1E', // 警告色
                'error-color': '#FE6058', // 错误色
                'invalid-color': '#999', // 失效色
                'tips-color': '#6C3721', // tips提示文字颜色
                'link-color': '#0E7EFF', // 蓝色链接色
                'txt-default-color': '#333', // 主字体颜色
                'txt-next-color': '#666', // 次要字体颜色
                'txt-subs-color': '#999', // 辅助，说明字体颜色
                'bg-color': '#f5f5f5', // 页面背景色
                'section-color': '#fff', // 内容背景色
                'divider-color': '#e5e5e5', // 分割线
                'border-color': '#cacaca', // 边框线
            },
        },
    },
})
