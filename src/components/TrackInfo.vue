<template>
  <h3>{{ heading }}</h3>
  <input type="text" :value="value" readonly />
</template>

<script>
export default {
  props: { heading: String, value: String },
}
</script>
