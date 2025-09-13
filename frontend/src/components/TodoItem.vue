<script setup>
const emit = defineEmits(['toggle', 'delete'])

const props = defineProps({
  todo: Object,
})

function removeTodo() {
  emit('delete', props.todo.id)
}

function toggleDone() {
  emit('toggle', props.todo.id)
}

</script>

<template>
  <li
  class="bg-white bg-opacity-90 p-5 rounded-2xl border-l-4 shadow-lg transition-all duration-300"
  :class="props.todo.done ? 'border-teal-400 opacity-60' : 'border-indigo-500'">

  <div class="flex items-center gap-4">
    <span
      class="flex-1 text-lg font-medium cursor-pointer"
      :class="props.todo.done ? 'line-through text-gray-400' : 'text-gray-800'"
      @click="toggleDone"
    >
      {{ props.todo.text }}
    </span>

    <button
      class="px-4 py-2 bg-gradient-to-r from-red-400 to-red-600 text-white rounded-lg text-sm font-medium transition-all duration-300 hover:shadow-md hover:shadow-red-200 cursor-pointer"
      @click="removeTodo"
    >
      Remove
    </button>
  </div>
</li>

</template>
