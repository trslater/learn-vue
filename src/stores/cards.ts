import { defineStore } from "pinia";
import dummyData from "../../data/dummy.json"

export const useCardStore = defineStore('cards', {
  state: (): CardState => ({
    byUuid: dummyData.cards.byUuid,
    uuidsByColumnUuid: dummyData.cards.uuidsByColumnUuid,
  }),
  getters: {
    byColumnUuid: (cards) => (columnUuid: string): Card[] =>
      cards.uuidsByColumnUuid[columnUuid].map(uuid => cards.byUuid[uuid])
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
