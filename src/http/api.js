import request from './request'

const ApiRootUrl = 'http://localhost:8888/'

const api = {
  // 首页数据接口
  gettest: (r) => request.get('random/1/2', null, {
    baseURL: ApiRootUrl
  })
}

export default api
