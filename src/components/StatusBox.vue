<template>
  <div class="bg-white border rounded p-4 text-center shadow-sm">
    <p class="text-sm text-gray-500">{{ label }}</p>
    <p :class="['font-semibold text-lg', color]">{{ value }}</p>
  </div>
</template>

<script>
export default {
  name: 'StatusBox',
  props: {
    label: String,
    value: String,
    color: String
  }
}
</script>
