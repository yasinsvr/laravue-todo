<script setup>
import { ref } from 'vue'

const props = defineProps({
  placeholder: {
    type: String,
    default: '',
  },
  error: {
    type: String
  },
})
const emit = defineEmits(['add'])

const text = ref('')

function submit() {  
  if (!text.value.trim()) return
  emit('add', text.value)
  text.value = ''
}
</script>

<template>
  <span v-if="props.error" class="text-red-500 text-center mb-2">
    {{ props.error }}
  </span>
  <form @submit.prevent="submit" class="flex gap-3 mb-8">
    <input
      type="text"
      v-model="text"
      class="flex-1 px-5 py-4 border-2 border-gray-200 rounded-2xl text-base bg-white bg-opacity-80 outline-0"
      :placeholder="props.placeholder"
    />
    <button
      class="cursor-pointer px-6 py-4 bg-gradient-to-b from-indigo-500 to-purple-600 text-white rounded-2xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
    >
      Add Task
    </button>
  </form>
</template>
