import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: [],
    dones: [],
  },
  getters: {
    todos(state) {
      return state.todos;
    },
    dones(state) {
      return state.dones;
    }
  },
  mutations: {
    addTodo(state, payload) {
      state.todos.push(payload.todo);
    },
    deleteTodo(state, d) {
      let index = state.todos.findIndex(todo => todo.d === d);
      state.todos.splice(index, 1);
    },
    doneTodo(state, d) {
      let index = state.todos.findIndex(todo => todo.d === d);
      let doneItem = state.todos[index]['title'];
      state.dones.push(doneItem);
      state.todos.splice(index, 1);
    },
    allDone(state) {
      state.dones.splice(0, state.dones.length);
      window.alert('Good Job🎉\n今日もよく頑張りました⭐️\n毎日えらい！！さすがだね✨');
    }
  },
  plugins: [createPersistedState()],
})
