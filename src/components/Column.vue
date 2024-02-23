<script setup lang="ts">
import { ref } from 'vue'
import type { ColumnDto } from '../types'

const props = defineProps<
  ColumnDto & {
    showDropTarget: boolean
  }
>()

const dummy = ref<Element | null>(null)

const emit = defineEmits<{
  mouseover: [event: any, uuid: string]
  mouseout: [event: any, uuid: string]
  mouseup: [event: any, uuid: string]
}>()
</script>

<template>
  <div
    class="column-wrapper"
    @mouseover="emit('mouseover', $event, uuid)"
    @mouseout="emit('mouseout', $event, uuid)"
    @mouseup="emit('mouseup', $event, uuid)"
  >
    <div class="column">
      <h2 class="column-heading">{{ title }}</h2>
      <div class="cards">
        <slot></slot>
      </div>
      <div v-show="showDropTarget" class="dummy">+</div>
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

.dummy {
  display: flex;

  background-color: rgba(green, 0.5);
  height: 150px;
  margin: 10px;
  border: 1px dashed green;
  align-items: center;
  justify-content: center;
}
</style>
