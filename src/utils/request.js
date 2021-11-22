/*
 * @Descripttion :
 * @version      : v1.0
 * @Author       : 段雄飞
 * @Date         : 2021-11-15 10:11:48
 * @LastEditors  : 段雄飞
 * @LastEditTime : 2021-11-15 11:12:01
 */
import Axios from 'axios'
import config from '@/config'

const getErrorCode2text = (response) => {
    const code = response.status
    let message = 'Request Error'
    /* eslint-disable indent */
    switch (code) {
        case 400:
            message = 'Request Error'
            break
        case 401:
            message = 'Unauthorized, please login'
            break
        case 403:
            message = '拒绝访问'
            break
        case 404:
            message = '访问资源不存在'
            break
        case 408:
            message = '请求超时'
            break
        case 500:
            message = '位置错误'
            break
        case 501:
            message = '承载服务未实现'
            break
        case 502:
            message = '网关错误'
            break
        case 503:
            message = '服务暂不可用'
            break
        case 504:
            message = '网关超时'
            break
        case 505:
            message = '暂不支持的 HTTP 版本'
            break
        default:
            message = '位置错误'
    }
    /* eslint-enable indent */
    return message
}

const request = Axios.create()

Object.assign(request.defaults, {
    baseURL: '', // 本地用proxy代理，线上使用nginx代理
    timeout: config.timeout,
    withCredentials: true,
    crossDomain: true,
    'Cache-Control': 'no-cache',
    headers: {
        'Content-Type': 'application/json',
    },
})

request.interceptors.request.use(
    (config) => {
        return config
    },
    (error) => {
        return Promise.reject(error)
    }
)

request.interceptors.response.use(
    /** 请求有响应 */
    (response) => {
        if (response.status === 200) {
            return Promise.resolve(response.data)
        } else {
            const __text = getErrorCode2text(response)
            toast(__text)
            return Promise.reject(new Error(__text))
        }
    },
    /** 请求无响应 */
    (error) => {
        let __emsg = error.message || ''

        if (error.response) {
            __emsg =
                error.response.data.message || error.response.data.errorMessage
                    ? error.response.data.message ||
                      error.response.data.errorMessage
                    : error.response.data.error
        }
        // timeout
        if (__emsg.indexOf('timeout') >= 0) {
            __emsg = '请求超时'
        }
        if (__emsg.indexOf('Network Error') >= 0) {
            __emsg = '网络连接错误'
        }
        return Promise.reject(new Error(__emsg))
    }
)

export default request
