/*
 * @Descripttion :
 * @version      : v1.0
 * @Author       : 段雄飞
 * @Date         : 2021-05-24 14:46:18
 * @LastEditors  : 段雄飞
 * @LastEditTime : 2021-11-22 21:22:45
 */

export default {
    env: 'stage',
    port: 5001, // devServer端口
    httpRequestURL: 'https://api-stage.baidu.com', // 接口请求地址
    timeout: 10 * 1000, // 请求超时时间 10S
}
