import { defineStore } from "pinia";
import { v4 as uuid4 } from "uuid"
import dummyData from "../../data/dummy.json"

export const useCardStore = defineStore('cards', {
  state: (): CardState => ({
    byUuid: dummyData.cards.byUuid,
    uuidsByColumnUuid: dummyData.cards.uuidsByColumnUuid,
  }),
  getters: {
    byColumnUuid: (cards) => (columnUuid: string): Card[] =>
      cards.uuidsByColumnUuid[columnUuid].map(uuid => cards.byUuid[uuid])
  },
  actions: {
    new: function (newCardTitle: string) {
      if (newCardTitle === '') return

      const newCard: Card = {
        uuid: uuid4(),
        title: newCardTitle
      }

      this.byUuid[newCard.uuid] = newCard

      return newCard.uuid
    }
  }
})

interface CardState {
  byUuid: { [uuid: string]: Card }
  uuidsByColumnUuid: { [columnUuid: string]: string[] }
}

export interface Card {
  uuid: string
  title: string
}
