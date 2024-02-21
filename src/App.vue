<script setup lang="ts">
import Board from './components/Board.vue'
import Column from './components/Column.vue'
import Card from './components/Card.vue'
import { DragState, store } from './store'

function onCardMouseDown(event: any, uuid: string) {
  event.preventDefault()
  if (store.dragState === DragState.Dropped) {
    store.dragState = DragState.PickedUp
    store.draggingCard = uuid
    console.log(`Picked up '${store.draggingCard}'`)
  }
}

function onCardMouseMove(event: any, uuid: string) {
  if (store.dragState === DragState.PickedUp) {
    store.dragState = DragState.Dragged
    console.log(`Dragged '${store.draggingCard}'`)
  }
}

function onCardMouseUp(event: any, toUuid: string) {
  if (!store.draggingCard) return

  const toColumnUuid = store.cards[toUuid].columnUuid

  if (!toColumnUuid) return

  const fromColumnUuid = store.cards[store.draggingCard].columnUuid

  if (!fromColumnUuid) return

  if (store.dragState === DragState.PickedUp) {
    console.log(`Dropped: Open '${store.draggingCard}'`)
  } else if (store.dragState === DragState.Dragged) {
    const cardBounds = event.currentTarget.getBoundingClientRect()
    const percentage = (event.y - cardBounds.top) / cardBounds.height

    const fromColumn = store.columns[fromColumnUuid]
    const fromIndex = fromColumn.cardUuids.indexOf(store.draggingCard)

    const toColumn = store.columns[toColumnUuid]
    const toIndex = toColumn.cardUuids.indexOf(toUuid)

    store.cards[store.draggingCard].columnUuid = toColumnUuid
    fromColumn.cardUuids.splice(fromIndex, 1)

    if (percentage < 0.5) {
      toColumn.cardUuids.splice(toIndex, 0, store.draggingCard)
    } else {
      toColumn.cardUuids.splice(toIndex + 1, 0, store.draggingCard)
    }
  }

  store.dragState = DragState.Dropped
  store.draggingCard = undefined
}
</script>

<template>
  <Board :title="store.board.title">
    <Column v-for="column in store.columns" v-bind="column">
      <Card
        v-for="card in column.cardUuids.map((uuid) => store.cards[uuid])"
        v-bind="card"
        @mousedown="onCardMouseDown"
        @mousemove="onCardMouseMove"
        @mouseup="onCardMouseUp"
      />
    </Column>
  </Board>
</template>

<style scoped></style>
