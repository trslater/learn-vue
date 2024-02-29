<script setup lang="ts">
import type { Card } from '@/stores/cards'

const props = defineProps<Card>()

const emit = defineEmits<{
  mousedown: [uuid: string]
  mousemove: []
  mouseup: [uuid: string, mouseOverBottomHalf: boolean]
}>()

function onMouseUp(event: MouseEvent) {
  if (!(event.currentTarget instanceof Element)) return

  const cardBounds = event.currentTarget.getBoundingClientRect()
  const triggeredAtBottomHalf = (event.y - cardBounds.top) / cardBounds.height >= 0.5

  emit('mouseup', props.uuid, triggeredAtBottomHalf)
}
</script>


<template>
  <div class="card-wrapper" @mousemove="emit('mousemove')" @mouseup="onMouseUp">
    <div class="card" @mousedown.prevent="emit('mousedown', uuid)">
      <h3 class="card-title">{{ title }}</h3>
    </div>
  </div>
</template>

<style scoped>
.card-wrapper {
  padding: 5px 10px;
}

h3 {
  margin: 0;
}

.card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  background-color: white;
  height: 150px;
  padding: 20px;
  border-radius: 3px;
  box-shadow: 0 3px 3px rgba(0, 0, 0, 0.2);
}

.card-heading {
  font-size: 16px;
  font-weight: normal;
}

.card:hover {
  background-color: #dfefff;
}
</style>
