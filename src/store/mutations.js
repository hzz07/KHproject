import * as types from './mutation-types'

const mutations = {
  [types.SET_INCREASE](state, increase) {
    state.increase = increase
  },
  [types.SET_AGENTID](state, agentid) {
    state.agentid = agentid
  },
  [types.SET_CHANGE_NET_WORK](state ,changeNetwork) {
    state.changeNetwork = changeNetwork
  },
  [types.SET_SHOW_LOADING](state,showLoading){
    state.showLoading = showLoading
  },
  [types.SET_TAG_FLAG](state,tagFlag){
    state.tagFlag = tagFlag
  },
  [types.SET_CHECK_FLAG](state,checkFlag){
    state.checkFlag = checkFlag
  },
  [types.SET_SHOW_CONFIRM](state,showConfirm){
    state.showConfirm = showConfirm
  },


}

export default mutations


// WEBPACK FOOTER //
// ./src/store/mutations.js
