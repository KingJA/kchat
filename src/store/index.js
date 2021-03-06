import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import state from './state'
import mutations from './mutations'
import createLogger from 'vuex/dist/logger'
/*modules*/
import loginModule from './modules/login'
import registerModule from './modules/register'
import createModule from './modules/create'
import connectModule from './modules/connect'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  actions,
  getters,
  state,
  mutations,
  modules: {loginModule, registerModule, createModule, connectModule},
  strict: debug,
  plugins: debug ? [createLogger()] : []
})

// export interface StoreOptions<S> {
// actions?: ActionTree<S, S>;
// getters?: GetterTree<S, S>;
// state?: S;
// mutations?: MutationTree<S>;
// strict?: boolean;
// plugins?: Plugin<S>[];
// modules?: ModuleTree<S>;
// }
