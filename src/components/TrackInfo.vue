<template>
  <h3>{{ heading }}</h3>
  <v-text-field
    type="text"
    style="color: #e2d1f9"
    variant="outlined"
    :value="value"
    readonly
  />
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  props: { heading: String, value: String },
})
</script>
