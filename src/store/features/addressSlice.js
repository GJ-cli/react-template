/*
 * @Descripttion :
 * @version      : v1.0
 * @Author       : 段雄飞
 * @Date         : 2021-11-15 13:23:12
 * @LastEditors  : 段雄飞
 * @LastEditTime : 2021-11-17 11:35:15
 */

// @reduxjs/toolkit插件文档: https://redux-toolkit.js.org/api/createAsyncThunk

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { AddressServices } from '@/apis'

// 获取收货地址列表
export const getAddressList = createAsyncThunk(
    'address/getAddressList',
    async (payload, thunkAPI) => await AddressServices.getAddressList(payload)
)

export const addressSlice = createSlice({
    name: 'address',
    initialState: {
        addressList: [],
        defaultAddressId: '',
    },
    reducers: {
        setState(state, { payload }) {
            Object.assign(state, payload)
        },
    },
    extraReducers: {
        [getAddressList.fulfilled](state, { payload }) {
            state.addressList = payload
            // 设置默认收货地址的id
            const defaultUseAddress = payload.find(
                (item) => item.defaultuse === 1
            )
            defaultUseAddress && (state.defaultAddressId = defaultUseAddress.id)
        },
    },
})

export const { setState } = addressSlice.actions

export default addressSlice.reducer
