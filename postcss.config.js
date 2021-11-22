/*
 * @Descripttion :
 * @version      : v1.0
 * @Author       : 段雄飞
 * @Date         : 2021-11-13 12:58:02
 * @LastEditors  : 段雄飞
 * @LastEditTime : 2021-11-13 15:04:58
 */

module.exports = {
    plugins: {
        'postcss-pxtorem': {
            rootValue: 37.5,
            minPixelValue: 1, // 最小的换算单位： 只有1px以上才会做rem转换
            propList: ['*'],
            // selectorBlackList: ['.adm-'], // 过滤掉.adm-开头的class，不进行rem转换
            // exclude: /node_modules/i,
        },
    },
}
