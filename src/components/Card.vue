<script setup lang="ts">
import Pill from './Pill.vue'

const props = defineProps<{
  uuid?: string
  title?: string
  labels?: any
}>()

const emit = defineEmits(['mousedown', 'mousemove', 'mouseup'])
</script>

<template>
  <div
    class="card"
    @mousedown="emit('mousedown', $event, $props.uuid)"
    @mousemove="emit('mousemove', $event, $props.uuid)"
    @mouseup="emit('mouseup', $event, $props.uuid)"
  >
    <h3 class="card-heading">{{ title }}</h3>

    <div class="labels">
      <Pill :label="label" v-for="label in labels" />
    </div>
  </div>
</template>

<style scoped>
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
