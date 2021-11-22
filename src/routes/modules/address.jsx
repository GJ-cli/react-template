/*
 * @Descripttion :
 * @version      : v1.0
 * @Author       : 段雄飞
 * @Date         : 2021-11-12 16:12:51
 * @LastEditors  : 段雄飞
 * @LastEditTime : 2021-11-16 10:13:51
 */

import AddressList from '@/views/Address/AddressList'
import AddAddress from '@/views/Address/AddAddress'

export default [
    {
        path: '/address/addressList',
        element: <AddressList />,
    },
    {
        path: '/address/addAddress',
        element: <AddAddress />,
    },
]
