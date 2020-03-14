import { ACTION_TYPES } from '../actions'

const initialState = [
  {
    id: `LIST-${0}`,
    title: 'List 1',
    cards: [
      {
        id: `CARD-${0}`,
        text: 'Sit elit cupidatat sunt eiusmod aliqua.'
      },
      {
        id: `CARD-${1}`,
        text:
          'Quis id incididunt dolor esse ullamco ipsum excepteur aute enim officia ut duis magna.'
      }
    ]
  },
  {
    id: `LIST-${1}`,
    title: 'List 2',
    cards: [
      {
        id: `CARD-${2}`,
        text:
          'Ullamco tempor dolore sunt dolore irure sit magna irure ea occaecat id.'
      },
      {
        id: `CARD-${3}`,
        text:
          'Ut sit in amet pariatur in dolore eiusmod minim commodo ad dolore.'
      },
      {
        id: `CARD-${4}`,
        text:
          'Quis exercitation est excepteur in est quis id exercitation esse.'
      }
    ]
  }
]

let listId = 2
let cardId = 5

const listsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ACTION_TYPES.ADD_LIST: {
      const newList = {
        title: payload,
        cards: [],
        id: `LIST-${listId}`
      }
      listId += 1
      return [...state, newList]
    }

    case ACTION_TYPES.ADD_CARD: {
      const newCard = {
        text: payload.text,
        id: `CARD-${cardId}`
      }
      cardId += 1

      return state.map(list => {
        if (list.id === payload.listId) {
          return {
            ...list,
            cards: [...list.cards, newCard]
          }
        } else {
          return list
        }
      })
    }

    case ACTION_TYPES.DRAG_HAPPENED: {
      const {
        droppableIdStart,
        droppableIdEnd,
        droppableIndexStart,
        droppableIndexEnd,
        draggableId
      } = payload

      // in the same list
      if (droppableIdStart === droppableIdEnd) {
        const list = state.find(list => list.id === droppableIdStart)
        const card = list.cards.splice(droppableIndexStart, 1)
        list.cards.splice(droppableIndexEnd, 0, ...card)
      }

      // in other list
      if (droppableIdStart !== droppableIdEnd) {
        // find the list where drag happened
        const listStart = state.find(list => list.id === droppableIdStart)

        // pull out the card from this list
        const card = listStart.cards.splice(droppableIndexStart, 1)

        // find the list where drag ended
        const listEnd = state.find(list => list.id === droppableIdEnd)

        // put the card in the new list
        listEnd.cards.splice(droppableIndexEnd, 0, ...card)
      }

      return [...state]
    }

    default: {
      return state
    }
  }
}

export default listsReducer
