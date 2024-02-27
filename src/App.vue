<script setup lang="ts">
import { useBoardStore } from '@/stores/board'
import { useColumnStore } from '@/stores/columns'
import { useCardStore } from '@/stores/cards'
import Board from './components/Board.vue'
import Column from './components/Column.vue'
import Card from './components/Card.vue'

const board = useBoardStore()
const columns = useColumnStore()
const cards = useCardStore()
</script>

<template>
  <Board :title="board.title">
    <Column v-for="column in columns.byUuid" v-bind="column" :show-drop-target="false">
      <Card v-for="card in cards.byColumnUuid(column.uuid)" v-bind="card" @mousedown="board.grabCard"
        @mousemove="board.dragCard" @mouseup="board.dropCard" />
    </Column>
  </Board>
</template>

<style scoped></style>
