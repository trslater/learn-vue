<script setup lang="ts">
defineProps<{ title: string }>()
</script>

<template>
  <div class="board">
    <h1>{{ title }}</h1>

    <div class="columns">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.board {
  padding: 20px;
}

.columns {
  display: flex;
  align-items: stretch;
  gap: 10px;

  overflow-x: scroll;
}
</style>
