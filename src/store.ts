import { reactive } from 'vue'
import { v4 as uuid4 } from 'uuid'

export const enum DragState {
  Dropped = 0,
  PickedUp = 1,
  Dragged = 2
}

interface Store {
  dragState: DragState
  dragTarget: string | undefined
  board: BoardDto
}

interface BoardDto {
  columns: ColumnDto[]
}

interface ColumnDto {
  title: string
  cards: CardDto[]
}

interface CardDto {
  uuid: string
  title: string
  labels: string[]
}

export function getCardByUuid(uuid: string) {}

export const store: Store = reactive({
  dragState: DragState.Dropped,
  dragTarget: undefined,
  board: {
    columns: [
      {
        title: 'Backlog',
        cards: [
          {
            uuid: uuid4(),
            title: 'Some task',
            labels: ['feature', 'important']
          },
          {
            uuid: uuid4(),
            title: 'Another task',
            labels: ['feature', 'important']
          },
          {
            uuid: uuid4(),
            title: 'Still more tasks',
            labels: ['feature']
          },
          {
            uuid: uuid4(),
            title: "Uh oh, it's broken!",
            labels: ['bug']
          }
        ]
      },
      {
        title: 'Todo',
        cards: [
          {
            uuid: uuid4(),
            title: 'Some task',
            labels: ['feature', 'important']
          },
          {
            uuid: uuid4(),
            title: 'Another task',
            labels: ['feature', 'important']
          },
          {
            uuid: uuid4(),
            title: 'Still more tasks',
            labels: ['feature']
          },
          {
            uuid: uuid4(),
            title: "Uh oh, it's broken!",
            labels: ['bug']
          }
        ]
      },
      {
        title: 'Doing',
        cards: [
          {
            uuid: uuid4(),
            title: 'Refactor this stuff',
            labels: ['enhancement']
          },
          {
            uuid: uuid4(),
            title: 'Some bug',
            labels: ['bug']
          }
        ]
      },
      {
        title: 'Blocked',
        cards: [
          {
            uuid: uuid4(),
            title: 'New service',
            labels: []
          }
        ]
      },
      {
        title: 'Done',
        cards: [
          {
            uuid: uuid4(),
            title: 'Lots of new shiny things',
            labels: ['feature']
          }
        ]
      }
    ]
  }
})
