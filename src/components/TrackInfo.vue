<template>
  <h3>{{ heading }}</h3>
  <input type="text" :value="value" readonly />
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  props: { heading: String, value: String },
})
</script>
