import Vue from 'vue'
import Vuex from 'vuex'
// import 'babel-polyfill'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
    data(state,params){
      for(let i in params){
        state[i] = params[i]
      }
    },
  },
  actions: {

  }
})
