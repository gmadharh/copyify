<template>
  <div class="flex flex-col justify-center items-center">
    <h3 class="text-base font-lora">{{ heading }}</h3>
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
  props: { heading: String, value: String },
})
</script>
