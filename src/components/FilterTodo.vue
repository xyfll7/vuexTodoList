<template>
    <div>
        <h3>Filter todo</h3>
        <select v-model="limit" @change="filterTodos(limit)">
            <option value="200">200</option>
            <option value="150">150</option>
            <option value="100">100</option>
            <option value="20">20</option>
            <option value="10">10</option>
            <option value="5">5</option>
        </select>
    </div>
</template>
<script>
// import { mapActions } from 'vuex'
export default {
  name: 'FilterTodo',
  data () {
    return {
      limit: 200
    }
  },
  // methods: mapActions(['filterTodos'])
  methods: {
    filterTodos (limit) {
      this.$store.dispatch('filterTodos', limit)
    }
  }
}
</script>
<style scoped>
select {
    padding: 10px;
    border: 1px solid #ccc;
}
</style>
