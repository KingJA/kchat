import {
  SHOW_LOADING,
  SUCCESS,
  FAIL
} from '../mutation-types'

import api from '../../../src/api/api'
import router from '../../../src/router/index'

const state = {
  isLoading: false
}

const actions = {
  connect({commit}, data) {
    commit(SHOW_LOADING);
    api.connect(data)
      .then(response => {
        commit(SUCCESS);
        router.push({name: 'chat',query: { connectId: data.connectId}});
      }).catch(error => {
      commit(FAIL, error);
    })
  }
}

const mutations = {
  [SHOW_LOADING](state) {
    state.isLoading = true;
  },
  [SUCCESS](state) {
    state.isLoading = false;
  },
  [FAIL](state, error) {
    state.isLoading = false;
    console.log("网络错误:" + error.data.msg)
  }
}

export default {
  state,
  actions,
  mutations
}
