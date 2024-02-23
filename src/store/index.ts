import { mutations } from './mutations'
import { getters } from './getters'
import { createStore } from 'vuex'
import type { State } from '../types'

import dummyData from '../../data/dummy.json'

export const enum DragState {
  Dropped = 0,
  PickedUp = 1,
  Dragged = 2
}

const state: State = {
  dragState: DragState.Dropped,
  board: {
    title: 'My Board',
    columnUuids: Object.values(dummyData.columns).map((column) => column.uuid)
  },
  columns: dummyData.columns,
  cards: dummyData.cards
}

export default createStore({
  state,
  getters,
  mutations
})
