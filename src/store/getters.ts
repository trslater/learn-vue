import type { State } from '../types'

export const getters = {
  columnUuidByCardUuid: (state: State) => (cardUuid: string) => {
    const columnUuid = state.cards[cardUuid].columnUuid

    if (!columnUuid) return ''

    return columnUuid
  }
}
