import api from '../index'
import urls from './urls'

// 用于补充头部信息，如cookie之类的
const header = {}

export default {
    damageType(params) {
        // return出去了一个promise
        return api.get(urls.damageType, params, header)
    }
}
