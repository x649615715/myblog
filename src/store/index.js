import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  state: {
    name: 'astea',
    data: 1,
    everydayObj: {
      contenten: "Good teachers, they inspire you, they entertain you, and you end up learning a ton even when you don't know it.",
      contentzh: "好的老师会激励你，给你带来欢乐，悄然无声地教会你很多东西。",
      author: "———— Nicholas Sparks"
    }
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
