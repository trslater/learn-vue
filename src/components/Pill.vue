<script setup lang="ts">
defineProps<{
  label?: string
}>()
</script>

<template>
  <div class="pill">
    {{ label }}
  </div>
</template>

<style scoped>
.pill {
  color: white;
  font-size: 12px;

  display: inline-block;
  background-color: grey;
  padding: 5px 10px;
  border-radius: 100px;
  margin-right: 5px;
}
</style>
