import { ACTION_TYPES } from '../actions'

export const addCard = (text, listId) => {
  return {
    type: ACTION_TYPES.ADD_CARD,
    payload: { text, listId }
  }
}
