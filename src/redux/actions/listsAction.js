import { ACTION_TYPES } from '../actions'

export const addList = title => {
  return {
    type: ACTION_TYPES.ADD_LIST,
    payload: title
  }
}

export const sort = (
  droppableIdStart,
  droppableIdEnd,
  droppableIndexStart,
  droppableIndexEnd,
  type
) => {
  return {
    type: ACTION_TYPES.DRAG_HAPPENED,
    payload: {
      droppableIdStart,
      droppableIdEnd,
      droppableIndexStart,
      droppableIndexEnd,
      type
    }
  }
}
