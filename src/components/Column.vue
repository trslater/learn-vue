<script setup lang="ts">
import type { ColumnDto } from '../store'

defineProps<ColumnDto>()

const emit = defineEmits<{
  mouseup: [event: any, uuid: string]
}>()
</script>

<template>
  <div class="column">
    <h2 class="column-heading" @mouseup="emit('mouseup', $event, uuid)">{{ title }}</h2>
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
  padding-block: 5px;
}

.column-heading {
  font-size: 16px;

  padding: 5px 10px;
  margin: 0;
}

.cards {
  display: flex;
  flex-direction: column;
}
</style>
