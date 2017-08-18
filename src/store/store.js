import Vue from 'vue'
import Vuex from 'Vuex'
import { mutations } from './mutations'
import { getters } from './getters'
import { actions } from './actions'
import lodash from 'lodash'
import VueLodash from 'vue-lodash/dist/vue-lodash.min'

vue.use(Vuex, VueLodash, lodash)

const state = {

}

export default new Vuex.Store ({
  state,
  mutations,
  getters,
  actions
})