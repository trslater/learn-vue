import type { State } from '../types'

export const mutations = {
  grabCard: (state: State, cardUuid: string) => {
    console.log(`Grabbed '${state.cards[cardUuid].title}'`)
    // state.draggingCardUuid = draggingCardUuid
  },
  dragCard: (state: State) => {
    if (!state.draggingCardUuid) return

    console.log(`Dragged '${state.cards[state.draggingCardUuid].title}'`)
  },
  moveCard: (state: State, { columnUuid, index }: { columnUuid: string; index: number }) => {
    if (!state.draggingCardUuid) return

    console.log(state.cards[state.draggingCardUuid].title, state.columns[columnUuid].title, index)
  }
}
