<template>
  <div class="flex flex-row justify-center items-center pb-3">
    <input
      type="text"
      class="text-white font-source-sans text-base focus:outline-none bg-transparent rounded-md p-2 mr-2"
      :value="value"
      readonly
    />
    <button class="bg-blue-200 mr-1">Copy</button>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  props: { value: String },
})
</script>
