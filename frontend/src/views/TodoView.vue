<script setup>
import TodoInput from '@/components/TodoInput.vue'
import TodoItem from '@/components/TodoItem.vue'
import useTodoStore from '@/store/todo'
import { onMounted } from 'vue'

const store = useTodoStore()
onMounted(() => {
  store.fetchTodos()
})

function addTodo(text) {
  store.addTodo(text)
}
</script>

<template>
  <div class="rounded-3xl p-10 w-full max-w-2xl flex flex-col justify-self-center overflow-hidden">
    <!-- Header -->
    <div class="text-center mb-10">
      <h1 class="text-4xl font-bold mb-3 text-cyan-300">✨ Amazing Tasks</h1>
      <p class="text-gray-200 text-lg font-light">Organize your life beautifully</p>
      <b class="text-gray-100 text-lg">Click to toggle task</b>
    </div>

    <!-- Add Task Section -->
    <todo-input :error="store.error" @add="addTodo" placeholder="What needs to be done today?" />

    <!-- Todo List -->

    <ul class="space-y-4 mb-8 z-10">
      <todo-item
        v-for="todo in store.todos"
        :key="todo.id"
        :todo="todo"
        @toggle="store.toggleTodo"
        @delete="store.deleteTodo"
      />
    </ul>
  </div>
</template>
