import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    todos: []
  },
  getters: {
    todos: (state) => state.todos
  },
  mutations: {
    setTodo: (state, payload) => {
      state.todos.push({
        task: payload,
        complete: false
      })
    },
    deleteTodo: (state, payload) => {
      state.todos.splice(state.todos.indexOf(payload), 1)
    },
    toggleComplete: (state, payload) => {
      const i = state.todos.indexOf(payload)
      state.todos[i].complete = !state.todos[i].complete
    }
  }
})
