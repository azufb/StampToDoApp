<template>
  <div id='app'>
    <h1>タスクスタンプラリー</h1>
    <form>
      <input type='text' />
      <input type='submit' value='ADD' />
    </form>
    <ul>
      <li>
        <input type='button' value='DONE' />
        <input type='button' value='DELETE' />
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'App',
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
</style>
