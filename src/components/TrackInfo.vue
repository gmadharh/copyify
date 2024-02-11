<template>
  <div class="flex flex-row justify-center items-center pb-3">
    <input
      type="text"
      class="text-white font-source-sans text-[14px] focus:outline-none bg-transparent rounded-md p-2 mr-2"
      :value="value"
      readonly
    />
    <button
      class="mr-1 w-7 h-7 rounded-sm border border-white flex items-center justify-center"
      @click="copyToClipboard(value)"
    >
      <Icon :icon="iconClass" class="text-white" />
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import { Icon } from '@iconify/vue'

export default defineComponent({
  data() {
    return {
      iconClass: 'uiw:copy',
    }
  },
  components: {
    Icon,
  },
  props: { value: String },
  methods: {
    // copy field to clipboard
    copyToClipboard(text: string) {
      navigator.clipboard.writeText(text).catch((error) => {
        console.log('error copying: ', error)
      })

      this.iconClass = 'flat-color-icons:checkmark'
      setTimeout(() => {
        this.iconClass = 'uiw:copy'
      }, 2000) // Adjust time as needed
    },
  },
})
</script>
