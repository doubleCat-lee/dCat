import * as types from './mutation-types'
const matations = {
  [types.SET_USER_INFO] (state, userInfo) {
    state.userInfo = userInfo
  },
  [types.GET_VLOG_LIST] (state, vlogList) {
    state.vlogList = vlogList
  },
  [types.GET_VLOG_LIST2] (state, vlogList) {
    state.vlogList = vlogList
  }
}

export default matations
