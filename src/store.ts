import { reactive } from 'vue'
import { v4 as uuid4 } from 'uuid'

export const enum DragState {
  Dropped = 0,
  PickedUp = 1,
  Dragged = 2
}

export interface Store {
  dragState: DragState
  draggingCard: string | undefined
  board: BoardDto
  columns: {
    [uuid: string]: ColumnDto
  }
  cards: {
    [uuid: string]: CardDto
  }
}

export interface BoardDto {
  title: string
  columnUuids: string[]
}

export interface ColumnDto {
  uuid: string
  title: string
  cardUuids: string[]
}

export interface CardDto {
  uuid: string
  title: string
  columnUuid?: string
}

export const store: Store = reactive({
  dragState: DragState.Dropped,
  draggingCard: undefined,
  board: {
    title: 'My Board',
    columnUuids: []
  },
  columns: {},
  cards: {}
})

for (let card of [
  {
    uuid: uuid4(),
    title: 'Some task'
  },
  {
    uuid: uuid4(),
    title: 'Another task'
  },
  {
    uuid: uuid4(),
    title: 'Still more tasks'
  },
  {
    uuid: uuid4(),
    title: "Uh oh, it's broken!"
  },
  {
    uuid: uuid4(),
    title: 'Some task'
  },
  {
    uuid: uuid4(),
    title: 'Another task'
  },
  {
    uuid: uuid4(),
    title: 'Still more tasks'
  },
  {
    uuid: uuid4(),
    title: "Uh oh, it's broken!"
  },
  {
    uuid: uuid4(),
    title: 'Refactor this stuff'
  },
  {
    uuid: uuid4(),
    title: 'Some bug'
  },
  {
    uuid: uuid4(),
    title: 'New service'
  },
  {
    uuid: uuid4(),
    title: 'Lots of new shiny things'
  }
]) {
  store.cards[card.uuid] = card
}

for (let column of [
  {
    uuid: uuid4(),
    title: 'Backlog',
    cardUuids: [
      Object.keys(store.cards)[0],
      Object.keys(store.cards)[1],
      Object.keys(store.cards)[2],
      Object.keys(store.cards)[3]
    ]
  },
  {
    uuid: uuid4(),
    title: 'Todo',
    cardUuids: [
      Object.keys(store.cards)[4],
      Object.keys(store.cards)[5],
      Object.keys(store.cards)[6],
      Object.keys(store.cards)[7]
    ]
  },
  {
    uuid: uuid4(),
    title: 'Doing',
    cardUuids: [Object.keys(store.cards)[8], Object.keys(store.cards)[9]]
  },
  {
    uuid: uuid4(),
    title: 'Blocked',
    cardUuids: [Object.keys(store.cards)[10]]
  },
  {
    uuid: uuid4(),
    title: 'Done',
    cardUuids: [Object.keys(store.cards)[11]]
  }
]) {
  store.columns[column.uuid] = column
  column.cardUuids.forEach((cardUuid) => {
    store.cards[cardUuid].columnUuid = column.uuid
  })
}
