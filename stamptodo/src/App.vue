<template>
  <div id='app'>
    <h1>ToDo管理</h1>
    <form v-on:submit.prevent='onclick'>
      <input class='inputTodo' type='text' id='title' v-model='title' required />
      <input class='btn' type='submit' value='ADD' />
    </form>
    <div class='todos'>
      <div class='progress'>
        <h2>In Progress</h2>
        <ul v-for='( todo, index ) in todos' :key='index'>
          <li>
            {{ todo.title }}
          </li>
          <div>
            <input class='dBtn' type='button' value='DONE' v-on:click='doneTodo(todo.d)' />
            <input class='btn' type='button' value='DELETE' v-on:click='deleteTodo(todo.d)' />
          </div>
        </ul>
      </div>
      <div class='done'>
        <h2>Done<input class='allDoneBtn' type='button' value='ALL DONE!' v-on:click='allDone()' /></h2>
        <ul v-for='(done, id) of dones' :key='id'>
          <li>
            {{ done }}
          </li>
        </ul>
      </div>
    </div>
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
    },
    allDone() {
      this.$store.commit('allDone');
    }
  }
}
</script>

<style>
* {
  background-color: rgb(192, 232, 245);
}
#app {
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
  margin-top: 0px;
  cursor: default;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

h1 {
  font-size: 50px;
  color: cornflowerblue;
  margin-top: 0px;
  margin-bottom: 0px;
}

input {
  font-size: 20px;
  margin-right: 5px;
}

.inputTodo {
  background-color: white;
}

.btn {
  font-weight: bold;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}

.todos {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

h2 {
  font-size: 35px;
  font-style: italic;
  color: gray;
  margin-top: 0px;
}

ul {
  display: flex;
}

ul li {
  list-style: none;
  font-size: 25px;
  font-weight: bold;
}

.progress {
  width: 50%;
  height: auto;
  border-right-style: dashed;
  border-right-color: cornflowerblue;
}

.dBtn {
  margin-left: 10px;
  font-weight: bold;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}

.done {
  width: 50%;
}

.allDoneBtn {
  margin-left: 30px;
  font-weight: bold;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}

footer {
  margin-top: auto;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}

@media(max-width: 767px) {
  h1 {
    font-size: 40px;
  }

  input {
    font-size: 12px;
  }

  .btn {
    font-size: 12px;
  }
  h2 {
    font-size: 25px;
  }

  ul {
    text-align: left;
    display: block;
  }

  ul li {
    list-style: none;
    font-size: 15px;
  }

  .dBtn {
  margin-left: 0px;
  }

  .done {
    width: 50%;
  }

  .allDoneBtn {
    margin-left: 5px;
  }

  footer {
    font-size: 12px;
  }
}
</style>
