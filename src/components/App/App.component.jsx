import React from 'react'
import { connect } from 'react-redux'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'

import TrelloList from '../TrelloList'
import TrelloActionButton from '../TrelloActionButton'
import { sort } from '../../redux/actions'

import styles from './App.module.scss'

const App = ({ lists, dispatch }) => {
  const onDragEnd = ({ destination, source, draggableId, type }) => {
    if (!destination) {
      return
    }

    dispatch(
      sort(
        source.droppableId,
        destination.droppableId,
        source.index,
        destination.index,
        type
      )
    )
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className={styles.app}>
        <div className={styles.appTitle}>Trello Clone</div>
        <Droppable droppableId="all-lists" direction="horizontal" type="list">
          {provided => (
            <div
              className={styles.listContainer}
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              {lists.map((list, index) => (
                <TrelloList
                  key={list.id}
                  listId={list.id}
                  title={list.title}
                  cards={list.cards}
                  index={index}
                />
              ))}
              {provided.placeholder}
              <TrelloActionButton list />
            </div>
          )}
        </Droppable>
      </div>
    </DragDropContext>
  )
}

const mapStateToProps = ({ lists }) => ({
  lists
})

export default connect(mapStateToProps)(App)
