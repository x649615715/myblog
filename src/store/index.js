import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    name: 'astea',
    data: 1
  },
  mutations: {
    setData (state, data) {
      state.data = data;
    }
  },
  actions: {
    ssetData ( {commit},data ) {
      commit('setData',data)
    }
  },
  modules: {
  }
})
