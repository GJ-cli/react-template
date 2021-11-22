/*
 * @Descripttion :
 * @version      : v1.0
 * @Author       : 段雄飞
 * @Date         : 2021-11-12 16:04:54
 * @LastEditors  : 段雄飞
 * @LastEditTime : 2021-11-12 17:27:25
 */
import { Navigate } from 'react-router-dom'
import home from './modules/home'
import address from './modules/address'
import NotFound from '@/views/Error/NotFound'

export default [
    {
        path: '/',
        element: <Navigate replace to="/home" />,
    },
    ...home,
    ...address,
    {
        path: '*',
        element: <NotFound />,
    },
]
