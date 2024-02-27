import { defineStore } from "pinia";
import { useColumnStore } from "./columns"
import { useCardStore } from "./cards"

export const useBoardStore = defineStore('board', {
  state: (): BoardState => ({
    title: 'My Board',
    columnUuids: [],
    dragState: DragState.Dropped
  }),
  actions: {
    grabCard: function () {
      if (this.dragState !== DragState.Dropped) return

      this.dragState = DragState.Grabbed
    },
    dragCard: function (cardUuid: string) {
      if (this.dragState !== DragState.Grabbed) return

      const columns = useColumnStore()

      this.grabbedCardUuid = cardUuid
      columns.removeCard(cardUuid)

      this.dragState = DragState.Dragging
    },
    dropCard: function (targetUuid: string, insertBelow: boolean) {
      if (this.dragState === DragState.Grabbed) {
        console.log("Open")
      }
      else if (this.dragState === DragState.Dragging) {
        if (this.dragState !== DragState.Dragging || !this.grabbedCardUuid || targetUuid === this.grabbedCardUuid) return

        const columns = useColumnStore()
        const cards = useCardStore()

        const destColumnUuid = columns.uuidByCardUuid[targetUuid]
        const index = cards.uuidsByColumnUuid[destColumnUuid].indexOf(targetUuid) + Number(insertBelow)

        columns.insertCard(destColumnUuid, index, this.grabbedCardUuid)
      }

      this.dragState = DragState.Dropped
    },
  }
})

export interface BoardState {
  title: string,
  columnUuids: string[],
  dragState: DragState
  grabbedCardUuid?: string
}

export const enum DragState {
  Dropped = 0,
  Grabbed = 1,
  Dragging = 2
}
