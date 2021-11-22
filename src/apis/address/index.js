/*
 * @Descripttion :
 * @version      : v1.0
 * @Author       : 段雄飞
 * @Date         : 2021-11-15 11:15:25
 * @LastEditors  : 段雄飞
 * @LastEditTime : 2021-11-22 21:27:59
 */
export default class AddressServices {
    // 获取用户地址
    static getAddressList(params) {
        return T.request.get('/api/order-user-address/list', {
            params,
        })
    }
}
