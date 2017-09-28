import es6Promise from 'es6-promise'
es6Promise.polyfill()
import Vue from 'vue'
import Vuex from 'vuex'
import { mutations } from './mutations'
import { getters } from './getters'
import { actions } from './actions'
import lodash from 'lodash'
import VueLodash from 'vue-lodash/dist/vue-lodash.min'
import moment from 'moment'

Vue.use(Vuex, VueLodash, lodash)

const state = {
}

export default new Vuex.Store ({
  strict: true,//Turn off prior to production//
  state,
  mutations,
  getters,
  actions
})