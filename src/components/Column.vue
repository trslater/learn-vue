<script setup lang="ts">
import type { ColumnDto } from '../store'

defineProps<ColumnDto>()
</script>

<template>
  <div class="column">
    <h2 class="column-heading">{{ title }}</h2>
    <div class="cards">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.column {
  flex-grow: 0;
  flex-shrink: 0;

  background-color: #e0e0e0;
  width: 300px;
  padding: 10px;
}

.column-heading {
  font-size: 16px;

  margin: 0;
  margin-bottom: 10px;
}

.cards {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>
