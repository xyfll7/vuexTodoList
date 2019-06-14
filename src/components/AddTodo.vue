<template>
  <div>
    <h3>Add Todo</h3>
    <form @submit="submit">
      <input type="text" v-model="title" placeholder="Add todo" >
      <input type="submit" value="Submit">
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'AddTodo',
  data () {
    return {
      title: ''
    }
  },
  methods: {
    ...mapActions(['addTodo']),
    submit (e) {
      console.log(this.$store.state.todos.todos.length + 1)
      e.preventDefault()
      const todo = {
        title: this.title,
        // id: this.$store.state.todos.todos.length + 1,
        completed: false
      }
      console.log(this.title)
      this.addTodo(todo)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
form {
  display: flex;
}
input[type="text"] {
  flex: 10;
  border: 1px solid #444;
  padding: 10px;
}
input[type="submit"] {
  background: #444;
  color: white;
  border: 1px solid #444;
  flex: 2;
  cursor: pointer;
}

</style>
