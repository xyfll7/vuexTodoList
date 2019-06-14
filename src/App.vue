<template>
  <div id="app">
    <AddTodo/>
    <FilterTodo/>
    <Todos/>
  </div>
</template>
<script>
import Todos from './components/Todos'
import AddTodo from './components/AddTodo'
import FilterTodo from './components/FilterTodo'
export default {
  name: 'app',
  components: {
    Todos,
    AddTodo,
    FilterTodo
  }
}
</script>

<style>
body {
  background: #cccccc;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  width: 1100px;
  margin: 60px auto;
}
h3 {
  padding: 10px;
  margin: 0;
}
</style>
