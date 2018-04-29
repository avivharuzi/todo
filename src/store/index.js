import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    tasks: []
  },
  getters: {
    tasks: (state) => state.tasks
  },
  mutations: {
    setTask: (state, payload) => {
      state.tasks.push(payload)
    },
    deleteTask: (state, payload) => {
      state.tasks.splice(state.tasks.indexOf(payload), 1)
    }
  }
})
