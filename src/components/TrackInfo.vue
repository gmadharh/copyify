<template>
  <div class="flex flex-col justify-center items-center">
    <input
      type="text"
      class="border-2 border-gray-300 focus:outline-none focus:border-blue-500 rounded-md p-2"
      :value="value"
      readonly
    />
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  props: { value: String },
})
</script>
