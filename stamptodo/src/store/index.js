import Vue from 'vue'
import Vuex from 'vuex'
import VCalendar from 'v-calendar'
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex)
Vue.use(VCalendar, {
  componentPrefix: 'vc',
});

export default new Vuex.Store({
  state: {
    todos: [
      {
        d: new Date(),
        title: 'PHP'
      }
    ],
    dones: ['Python'],
    attrs: [
      {
        key: 'today',
        dot: true,
        dates: new Date()
      }
    ]
  },
  getters: {
    todos(state) {
      return state.todos;
    },
    dones(state) {
      return state.dones;
    },
    attrs(state) {
      return state.attrs;
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
    }
  },
  plugins: [createPersistedState()],
})
