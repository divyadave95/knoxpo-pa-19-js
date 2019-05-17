import Vue from 'vue'
import Vuex from 'vuex'
import { doesNotReject } from 'assert';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todo: [ {
      id: 0,
      name: "Buy Food from the market",
      completed: false
    },
    {
      id: 1,
      name: "Buy milk from the market",
      completed: false
    }
  ],
    

  },
  mutations: {

    ADD_TODO (state, payload) {
      var newtodo = {
        id: payload.id,
        name: payload.name,
        completed: false
      }
      state.todo.unshift(newtodo);
      
    },
    COMPLETED_TODO (state, payload) {
      payload.completed = !payload.completed
    },
    REMOVE_TODO(state, payload) {
      var index = state.todo.findIndex(todo => todo.id === payload);
            state.todo.splice(index, 1);
    },
    EDIT_TODO(state, payload) {
      state.todo.name = payload.name
      console.log(state.todo.name)

    }

  },
  actions: {
    addToDo ({ commit }, payload) {
     commit('ADD_TODO', payload);
    },
    removeToDo({commit}, todo) {
      commit('REMOVE_TODO', todo)
    },
    completedToDo({commit}, todo) {
      commit('COMPLETED_TODO', todo)
    },
    editTodo({commit}, todo) {
      commit('EDIT_TODO', todo)
    }
  },
  getters: {
    gettodo: state => {
      return state.todo

    },
    completedtodos: state => {
      state.todo.filter((todo) => {
        return todo.completed
      })

    }
    
  }
})


















