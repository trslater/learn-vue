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
.columns {
  display: flex;
  align-items: flex-start;
  gap: 10px;
}
</style>
