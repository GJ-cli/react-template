/*
 * @Descripttion :
 * @version      : v1.0
 * @Author       : 段雄飞
 * @Date         : 2021-05-24 14:45:58
 * @LastEditors  : 段雄飞
 * @LastEditTime : 2021-06-09 20:10:05
 */

import development from './development'
import stage from './stage'
import production from './production'

export default {
    development,
    stage,
    production,
}[import.meta.env.MODE]
