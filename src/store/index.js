/*
 * @Descripttion :
 * @version      : v1.0
 * @Author       : 段雄飞
 * @Date         : 2021-11-15 11:47:54
 * @LastEditors  : 段雄飞
 * @LastEditTime : 2021-11-16 19:05:17
 */
import { configureStore } from '@reduxjs/toolkit'
import addressSlice from './features/addressSlice'

export default configureStore({
    reducer: {
        address: addressSlice,
    },
})
