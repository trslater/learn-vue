import { defineStore } from "pinia";
import { useCardStore } from "./cards"
import dummyData from "../../data/dummy.json"

export const useColumnStore = defineStore('columns', {
    state: (): ColumnState => ({
        byUuid: dummyData.columns.byUuid,
        uuidByCardUuid: dummyData.columns.uuidByCardUuid
    }),
    actions: {
        removeCard: function (cardUuid: string) {
            const cards = useCardStore()

            const columnUuid = this.uuidByCardUuid[cardUuid]
            const cardIndex = cards.uuidsByColumnUuid[columnUuid].indexOf(cardUuid)

            delete this.uuidByCardUuid[cardUuid]
            cards.uuidsByColumnUuid[columnUuid].splice(cardIndex, 1)
        },
        insertCard: function (columnUuid: string, index: number, cardUuid: string) {
            const cards = useCardStore()

            this.uuidByCardUuid[cardUuid] = columnUuid
            cards.uuidsByColumnUuid[columnUuid].splice(index, 0, cardUuid)
        }
    }
})

interface ColumnState {
    byUuid: { [uuid: string]: Column }
    uuidByCardUuid: { [cardUuid: string]: string }
}

export interface Column {
    uuid: string
    heading: string
}
