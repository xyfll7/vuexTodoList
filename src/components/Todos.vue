<template>
  <div>
    <h3>Todos</h3>
    <div class="todos">
      <div class="todo" v-for="todo in todos" v-bind:key="todo.id" :class="{'is-complete': todo.completed}" @dblclick="switchCompleted(todo)">
        {{ todo.title }}
        <span class="fa fa-trash-o  pull-right" @click="deleteTodo(todo.id)"></span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'todos',
  // computed: {
  //   todos () {
  //     // return this.$store.state.todos.todos
  //     return this.$store.getters.getAllTodos
  //   }
  // }
  computed: mapGetters({
    todos: 'getAllTodos'
  }),
  methods: {
    ...mapActions(['getAllTodos', 'deleteTodo', 'updateTodo']),
    switchCompleted (todo) {
      const updateTodo = {
        id: todo.id,
        title: todo.title,
        completed: !todo.completed
      }
      this.updateTodo(updateTodo)
    }
  },
  created () {
    this.getAllTodos()
  }
}
</script>

<style scoped>
.todos {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
}
.todo {
  background: rgb(9, 216, 106);
  padding: 10px;
  border: 1px solid rgb(158, 197, 163);
  border-radius: 3px;
  position: relative;
  cursor: pointer;
  color: white;
}
span {
  display: inline-block;
  position: absolute;
  width: 10px;
  height: 10px;
  bottom: 15px;
  right: 15px;
  color: gray;
}
.is-complete{
  background: red;
}
</style>
