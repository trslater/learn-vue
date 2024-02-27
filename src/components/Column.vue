<script setup lang="ts">
import type { Column } from '@/stores/columns'

const props = defineProps<Column>()
const emit = defineEmits<{
  enterup: [uuid: string, newCardTitle: string]
}>()

function onKeyUp(event: KeyboardEvent) {
  if (event.key !== 'Enter' || !(event.currentTarget instanceof HTMLInputElement)) return

  emit('enterup', props.uuid, event.currentTarget.value)

  event.currentTarget.value = ''
}
</script>

<template>
  <div class="column-wrapper">
    <div class="column">
      <h2 class="column-heading">{{ heading }}</h2>
      <div class="cards">
        <slot></slot>
        <input type="text" class="new-card-input" name="new-card" placeholder="New card..." @keyup="onKeyUp">
      </div>
    </div>
  </div>
</template>

<style scoped>
.column-wrapper {
  flex-grow: 0;
  flex-shrink: 0;
  height: 100%;
}

.column {
  background-color: #e0e0e0;
  width: 300px;
  padding-block: 5px;
  border-radius: 3px;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.1);
  overflow-y: scroll;
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

.new-card-input {
  padding: 10px;
  margin: 5px 10px;
}
</style>
