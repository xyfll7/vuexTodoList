// import axios from 'axios'

const state = {
  todos: []
}

const getters = {
  getAllTodos (state) {
    return state.todos
  }
}

const mutations = {
  setTodos (state, todos) {
    state.todos = todos
  },
  post (state, todo) {
    state.todos.unshift(todo)
  },
  delete (state, id) {
    state.todos = state.todos.filter(todo => todo.id !== id)
  },
  update (state, updateTodo) {
    let index = state.todos.findIndex(todo => todo.id === updateTodo.id)
    state.todos.splice(index, 1, updateTodo)
  }
}

const actions = {
  async getAllTodos ({ commit }) {
    const res = await fetch('http://jsonplaceholder.typicode.com/todos')
    const result = await res.json()
    commit('setTodos', result)
  },
  async addTodo ({ commit }, todo) {
    const res = await fetch('http://jsonplaceholder.typicode.com/todos', {
      method: 'POST', // or 'PUT'
      body: JSON.stringify(todo), // data can be `string` or {object}!
      headers: new Headers({
        'Content-Type': 'application/json'
      }) })
    const result = await res.json()
    console.log(result)
    commit('post', result)
    // const res = await axios.post('http://jsonplaceholder.typicode.com/todos', todo)
    // console.log(res)
    // commit('post', res.data)
  },
  async deleteTodo ({ commit }, id) {
    /* const result =  */await fetch(`http://jsonplaceholder.typicode.com/todos/${id}`, { method: 'DELETE' })
    // if (result.ok) {
    commit('delete', id)
    // } else {
    //   console.log('删除失败')
    // }
  },
  async filterTodos ({ commit }, limit) {
    const res = await fetch(`http://jsonplaceholder.typicode.com/todos?_limit=${limit}`)
    const result = await res.json()
    commit('setTodos', result)
  },
  async updateTodo ({ commit }, updateTodo) {
    await fetch(`http://jsonplaceholder.typicode.com/todos/${updateTodo.id}`)
    commit('update', updateTodo)
  }
}

export default { state, getters, mutations, actions }
