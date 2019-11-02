import api from '../index'
import urls from './urls'

// 用于补充头部信息，如cookie或token之类的
let header = {}

export default {
  search(params) {
    return api.get(urls.search, params, header)
  }
}
