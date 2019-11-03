import axios from 'axios'

// 创建 axios 实例
let service = axios.create({
    timeout: 60000
})

// service.defaults.baseURL = '/api' // 跨域需要加上的
service.defaults.baseURL = 'http://120.77.174.231:7001'
// 设置 post、put 默认 Content-Type
service.defaults.headers.post['Content-Type'] = 'application/json'
service.defaults.headers.put['Content-Type'] = 'application/json'

// 添加请求拦截器
service.interceptors.request.use(
    (config) => {
        // TODO:对请求做一些操作
        return config
    },
    (error) => {
        // 请求错误处理
        return Promise.reject(error)
    }
)

// 添加响应拦截器
service.interceptors.response.use(
    (response) => {
        // 如果返回的状态码为200，说明接口请求成功，可以正常拿到数据
        // 否则的话抛出错误
        if (response.status === 200) {
            return Promise.resolve(response.data);
        } else {
            return Promise.reject(response);
        }
    },
    (error) => {
        return Promise.reject(error.response)
    }
)

/**
 * 创建统一封装过的 axios 实例
 * @return {AxiosInstance}
 */
export default function() {
    return service
}
