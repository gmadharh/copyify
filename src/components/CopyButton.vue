<template>
  <button
    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-26 h-10 mx-auto self-end"
    @click="$emit('copy')"
  >
    Copy
  </button>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({})
</script>
