<script setup lang="ts">
defineProps<{
  data?: any
}>()
</script>

<template>
  <div class="board">
    <slot></slot>
  </div>
</template>

<style scoped>
.board {
  display: flex;
  align-items: flex-start;
  gap: 10px;
}
</style>
