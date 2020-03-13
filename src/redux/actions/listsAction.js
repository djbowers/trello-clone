import { ACTION_TYPES } from '../actions'

export const addList = title => {
  return {
    type: ACTION_TYPES.ADD_LIST,
    payload: title
  }
}
