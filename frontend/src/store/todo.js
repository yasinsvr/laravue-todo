import api from '@/plugins/axios'
import { defineStore } from 'pinia'
import { ref } from 'vue'

const useTodoStore = defineStore('todo', () => {
  const todos = ref([])
  const error = ref('')
  async function fetchTodos() {
    try {
      const { data } = await api.get('/tasks')
      todos.value = data
    } catch (error) {
      console.error('Fetch todos error:', error)
    }
  }

  async function addTodo(text) {
    try {
      error.value = ''
      const { data } = await api.post('/tasks/', { text })
      todos.value.push(data)
    } catch (err) {
      error.value = err.response.data.message ?? 'error to add task'
    }
  }

  async function toggleTodo(id) {
    const todo = todos.value.find((t) => t.id == id)
    console.log(todo.done ? 0 : 1);
    const { data } = await api.put(`/tasks/${id}`, { done: todo.done ? 0 : 1 })
    todo.done = data.done
  }

  async function deleteTodo(id) {
    await api.delete(`/tasks/${id}`)
    todos.value = todos.value.filter((t) => t.id !== id)
  }
  return {
    todos,
    error,
    fetchTodos,
    addTodo,
    toggleTodo,
    deleteTodo,
  }
})

export default useTodoStore
