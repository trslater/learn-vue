<script setup lang="ts">
import Board from './components/Board.vue'
import Column from './components/Column.vue'
import Card from './components/Card.vue'
import { useStore } from 'vuex'
import { compileTemplate } from 'vue/compiler-sfc'

const store = useStore()

function onCardMouseDown(event: MouseEvent, uuid: string) {
  event.preventDefault()

  store.commit('grabCard', uuid)

  // if (store.state.dragState === Dragstore.State.Dropped) {
  //   store.state.dragState = Dragstore.State.PickedUp
  //   store.state.draggingCard = uuid
  //   console.log(`Picked up '${store.state.draggingCard}'`)
  // }
}

function onCardMouseMove(event: MouseEvent, uuid: string) {
  // if (store.state.dragState === Dragstore.State.PickedUp) {
  //   store.state.dragState = Dragstore.State.Dragged
  //   console.log(`Dragged '${store.state.draggingCard}'`)
  // }
}

function onCardMouseOver(event: MouseEvent, uuid: string) {
  event.stopPropagation()
}

function onCardMouseUp(event: MouseEvent, toUuid: string) {
  event.stopPropagation()

  // console.log(store.state.columns[store.getters.columnUuidByCardUuid(toUuid)].title)

  // store.commit('moveCard', { columnUuid: 'sdoiasd', index: 0 })

  // if (!(event.currentTarget instanceof Element)) return

  // if (!store.state.draggingCard) return

  // const fromColumnUuid = store.state.cards[store.state.draggingCard].columnUuid
  // const toColumnUuid = store.state.cards[toUuid].columnUuid

  // if (!fromColumnUuid || !toColumnUuid) return

  // if (store.state.dragState === Dragstore.State.PickedUp) {
  //   console.log(`Dropped: Open '${store.state.draggingCard}'`)
  // } else if (store.state.dragState === Dragstore.State.Dragged) {
  //   const cardBounds = event.currentTarget.getBoundingClientRect()
  //   const percentage = (event.y - cardBounds.top) / cardBounds.height

  //   const fromColumn = store.state.columns[fromColumnUuid]
  //   const fromIndex = fromColumn.cardUuids.indexOf(store.state.draggingCard)

  //   const toColumn = store.state.columns[toColumnUuid]
  //   const toIndex = toColumn.cardUuids.indexOf(toUuid)

  //   store.state.cards[store.state.draggingCard].columnUuid = toColumnUuid
  //   fromColumn.cardUuids.splice(fromIndex, 1)

  //   if (percentage < 0.5) {
  //     toColumn.cardUuids.splice(toIndex, 0, store.state.draggingCard)
  //   } else {
  //     toColumn.cardUuids.splice(toIndex + 1, 0, store.state.draggingCard)
  //   }
  // }

  // store.state.dragState = Dragstore.State.Dropped
  // store.state.draggingCard = undefined
}

function onColumnMouseOver(event: MouseEvent, uuid: string) {
  // store.state.dropTargetColumn = uuid
}

function onColumnMouseOut(event: MouseEvent, uuid: string) {
  // if (store.state.dropTargetColumn === uuid) {
  //   store.state.dropTargetColumn = undefined
  // }
}

function onColumnMouseUp(event: MouseEvent, uuid: string) {
  // if (!store.state.draggingCard) return
  // moveCard(store.state.draggingCard, uuid, 0)
  // store.state.dropTargetColumn = undefined
  //   if (!store.state.draggingCard) return
  //   const fromColumnUuid = store.state.cards[store.state.draggingCard].columnUuid
  //   if (!fromColumnUuid) return
  //   store.state.columns[uuid].cardUuids.push(store.state.draggingCard)
  //   const fromColumn = store.state.columns[fromColumnUuid]
  //   const fromIndex = fromColumn.cardUuids.indexOf(store.state.draggingCard)
  //   fromColumn.cardUuids.splice(fromIndex, 1)
  //   store.state.dragState = Dragstore.State.Dropped
  //   store.state.draggingCard = undefined
}

// :show-drop-target="
//         store.state.dragState === Dragstore.State.Dragged && store.state.dropTargetColumn === column.uuid
//       "
</script>

<template>
  <Board :title="store.state.board.title">
    <!-- @mouseup="onColumnMouseUp" -->
    <Column
      v-for="column in store.state.columns"
      v-bind="column"
      :show-drop-target="false"
      @mouseover="onColumnMouseOver"
      @mouseout="onColumnMouseOut"
      @mouseup="onColumnMouseUp"
    >
      <Card
        v-for="card in column.cardUuids.map((uuid: string) => store.state.cards[uuid])"
        v-bind="card"
        @mousedown="onCardMouseDown"
        @mousemove="onCardMouseMove"
        @mouseover="onCardMouseOver"
        @mouseup="onCardMouseUp"
      />
    </Column>
  </Board>
</template>

<style scoped></style>
