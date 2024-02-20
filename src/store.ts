import { reactive, type App } from 'vue'
import { v4 as uuid4 } from 'uuid'

export const enum DragState {
  Dropped = 0,
  PickedUp = 1,
  Dragged = 2
}

export interface AppStore {
  dragState: DragState
  dragTarget: string | undefined
  board: BoardDto
}

export interface ColumnStore {
  byUuid: {
    [uuid: string]: ColumnDto
  }
  uuids: string[]
}

export interface CardStore {
  byUuid: {
    [uuid: string]: CardDto
  }
  uuids: string[]
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
}

export const appState: AppStore = reactive({
  dragState: DragState.Dropped,
  dragTarget: undefined,
  board: {
    title: 'My Board',
    columnUuids: []
  }
})

export const columns: ColumnStore = reactive({
  byUuid: {},
  uuids: []
})

export const cards: CardStore = reactive({
  byUuid: {},
  uuids: []
})

function addColumn(uuid: string, title: string, cardUuids: string[]) {
  columns.byUuid[uuid] = { uuid, title, cardUuids }
  columns.uuids.push(uuid)
}

function addCard(uuid: string, title: string) {
  cards.byUuid[uuid] = { uuid, title }
  cards.uuids.push(uuid)
}

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
  addCard(card.uuid, card.title)
}

for (let { uuid, title, cardUuids } of [
  {
    uuid: uuid4(),
    title: 'Backlog',
    cardUuids: [cards.uuids[0], cards.uuids[1], cards.uuids[2], cards.uuids[3]]
  },
  {
    uuid: uuid4(),
    title: 'Todo',
    cardUuids: [cards.uuids[4], cards.uuids[5], cards.uuids[6], cards.uuids[7]]
  },
  {
    uuid: uuid4(),
    title: 'Doing',
    cardUuids: [cards.uuids[8], cards.uuids[9]]
  },
  {
    uuid: uuid4(),
    title: 'Blocked',
    cardUuids: [cards.uuids[10]]
  },
  {
    uuid: uuid4(),
    title: 'Done',
    cardUuids: [cards.uuids[11]]
  }
]) {
  addColumn(uuid, title, cardUuids)
}
