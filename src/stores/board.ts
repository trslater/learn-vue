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
    grabCard: function (cardUuid: string) {
      if (this.dragState !== DragState.Dropped) return

      this.grabbedCardUuid = cardUuid
      this.dragState = DragState.Grabbed
    },
    dragCard: function () {
      if (this.dragState !== DragState.Grabbed) return

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
        
        columns.removeCard(this.grabbedCardUuid)
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
