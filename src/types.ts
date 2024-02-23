import { DragState } from './store'

export interface State {
  dragState: DragState
  draggingCardUuid?: string
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
