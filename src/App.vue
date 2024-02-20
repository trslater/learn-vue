<script setup lang="ts">
import Board from './components/Board.vue'
import Column from './components/Column.vue'
import Card from './components/Card.vue'
import { DragState, appState, columns, cards } from './store'

function onCardMouseDown(event: any, uuid: string) {
  event.preventDefault()
  if (appState.dragState === DragState.Dropped) {
    appState.dragState = DragState.PickedUp
    appState.dragTarget = uuid
    console.log(`Picked up '${appState.dragTarget}'`)
  }
}

function onCardMouseMove(event: any, uuid: string) {
  if (appState.dragState === DragState.PickedUp) {
    appState.dragState = DragState.Dragged
    console.log(`Dragged '${appState.dragTarget}'`)
  }
}

function onCardMouseUp(event: any, uuid: string) {
  if (appState.dragState === DragState.PickedUp) {
    console.log(`Dropped: Open '${appState.dragTarget}'`)
  } else if (appState.dragState === DragState.Dragged) {
    console.log(`Dropped: Move '${appState.dragTarget}' onto '${uuid}'`)
  }

  appState.dragState = DragState.Dropped
  appState.dragTarget = undefined
}
</script>

<template>
  <Board :title="appState.board.title">
    <Column v-for="column in columns.uuids.map((uuid) => columns.byUuid[uuid])" v-bind="column">
      <Card
        v-for="card in column.cardUuids.map((uuid) => cards.byUuid[uuid])"
        v-bind="card"
        @mousedown="onCardMouseDown"
        @mousemove="onCardMouseMove"
        @mouseup="onCardMouseUp"
      />
    </Column>
  </Board>
</template>

<style scoped></style>
