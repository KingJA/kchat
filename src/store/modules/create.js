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
  create({commit},data) {
    commit(SHOW_LOADING);
    api.create(data)
      .then(response => {
        commit(SUCCESS);
        // localStorage.setItem('token', response.data.data.jwt);
        // router.push({name: 'Home'});
        console.log("SUCCESS:" + response.data.data)
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
