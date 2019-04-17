import {GET_VLOG_LIST, GET_VLOG_LIST2} from './mutation-types'
import vlogList from '../datas/vlogList'
import vlogList2 from '../datas/vlogList2'
export default {
  getVlogList ({commit}) {
    commit(GET_VLOG_LIST, vlogList.vlogList)
  },
  getVlogList2 ({commit}) {
    commit(GET_VLOG_LIST2, vlogList2.vlogList)
  }
}
