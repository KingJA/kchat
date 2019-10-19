import {
  SHOW_LOADING,
  LOGIN_SUCCESS,
  LOGIN_FAIL
} from '../mutation-types'

import api from '../../../src/api/api'
import router from '../../../src/router/index'

const state = {
  isLoading: false
}

const actions = {
  register({commit},account) {
    commit(SHOW_LOADING);
    api.register(account)
      .then(response => {
        commit(LOGIN_SUCCESS);
        console.log("SHOW_LOADING:" + response.data.msg)
        router.push({name: 'Login'});
      }).catch(error => {
      commit(LOGIN_FAIL, error);
    })
  }
}

const mutations = {
  [SHOW_LOADING](state) {
    state.isLoading = true;
  },
  [LOGIN_SUCCESS](state) {
    state.isLoading = false;
  },
  [LOGIN_FAIL](state, error) {
    state.isLoading = false;
    console.log("网络错误:" + error.data.msg)
  }
}

export default {
  state,
  actions,
  mutations
}
