<template>
  <div id='app'>
    <h1>タスクスタンプラリー</h1>
    <form v-on:submit.prevent='onclick'>
      <input type='text' id='title' v-model='title' required />
      <input type='submit' value='ADD' />
    </form>
    <ul v-for='( todo, index ) in todos' :key='index'>
      <li>
        {{ todo.d }}
        {{ todo.title }}
      </li>
        <input type='button' value='DONE' v-on:click='doneTodo(todo.d)' />
        <input type='button' value='DELETE' v-on:click='deleteTodo(todo.d)' />
    </ul>
    <h2>DONE AREA</h2>
    <ul v-for='(done, id) of dones' :key='id'>
      <li>
        {{ done }}
      </li>
      <input type='button' value='DELETE' v-on:click='deleteTodo(todo.d)' />
    </ul>
  </div>
</template>

<script>

export default {
  name: 'App',
  computed: {
    todos() {
      return this.$store.getters.todos;
    },
    dones() {
      return this.$store.getters.dones;
    }
  },
  data() {
    return {
      d: '',
      title: ''
    }
  },
  methods: {
    onclick() {
      this.$store.commit('addTodo', {
        todo: {
          d: new Date(),
          title: this.title // 入力欄に入力された値。
        }
      });
      this.title = ''; // 入力部は空欄に戻す。
    },
    deleteTodo(d) {
      this.$store.commit('deleteTodo', d);
    },
    doneTodo(d) {
      this.$store.commit('doneTodo', d);
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

ul li {
  list-style: none;
}
</style>
