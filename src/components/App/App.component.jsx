import React from 'react'
import { connect } from 'react-redux'
import { DragDropContext } from 'react-beautiful-dnd'

import TrelloList from '../TrelloList'
import TrelloActionButton from '../TrelloActionButton'

import styles from './App.module.scss'

const App = ({ lists }) => {
  const onDragEnd = () => {
    // TODO: reordering logic
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className={styles.app}>
        <div className={styles.appTitle}>Trello Clone</div>
        <div className={styles.listContainer}>
          {lists.map(list => (
            <TrelloList
              key={list.id}
              listId={list.id}
              title={list.title}
              cards={list.cards}
            />
          ))}
          <TrelloActionButton list />
        </div>
      </div>
    </DragDropContext>
  )
}

const mapStateToProps = ({ lists }) => ({
  lists
})

export default connect(mapStateToProps)(App)
