<script setup lang="ts">
defineProps<{ title: string }>()
</script>

<template>
  <div class="board">
    <h1 class="board-heading">{{ title }}</h1>

    <div class="columns">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.board {
  /* position: static; */
  display: flex;
  flex-direction: column;

  background-color: dodgerblue;
  height: 100%;
  padding: 20px;
}

.board-heading {
  color: white;
}

.columns {
  display: flex;
  align-items: stretch;
  gap: 10px;

  overflow-x: scroll;
}
</style>
