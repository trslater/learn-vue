<script setup lang="ts">
import Board from './components/Board.vue'
import Column from './components/Column.vue'
import Card from './components/Card.vue'
import { DragState, store } from './store'

function onCardMouseDown(event: any, uuid: string) {
  event.preventDefault()
  if (store.dragState === DragState.Dropped) {
    store.dragState = DragState.PickedUp
    store.dragTarget = uuid
    console.log(`Picked up '${store.dragTarget}'`)
  }
}

function onCardMouseMove(event: any, uuid: string) {
  if (store.dragState === DragState.PickedUp) {
    store.dragState = DragState.Dragged
    console.log(`Dragged '${store.dragTarget}'`)
  }
}

function onCardMouseUp(event: any, uuid: string) {
  console.log(store.dragTarget)
  if (store.dragState === DragState.PickedUp) {
    console.log(`Dropped: Open '${store.dragTarget}'`)
  } else if (store.dragState === DragState.Dragged) {
    console.log(`Dropped: Move '${store.dragTarget}' onto '${uuid}'`)
  }

  store.dragState = DragState.Dropped
  store.dragTarget = undefined
}
</script>

<template>
  <Board :data="store.board">
    <Column v-for="column in store.board.columns" :title="column.title" :cards="column.cards">
      <Card
        v-for="card in column.cards"
        :uuid="card.uuid"
        :title="card.title"
        :labels="card.labels"
        @mousedown="onCardMouseDown"
        @mousemove="onCardMouseMove"
        @mouseup="onCardMouseUp"
      />
    </Column>
  </Board>
</template>

<style scoped></style>
