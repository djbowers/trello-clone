import React from 'react'
import { connect } from 'react-redux'

import TrelloList from '../TrelloList'
import TrelloActionButton from '../TrelloActionButton'

import styles from './App.module.scss'

const App = ({ lists }) => {
  return (
    <div className={styles.app}>
      <div className={styles.appTitle}>Trello Clone</div>
      <div className={styles.listContainer}>
        {lists.map(list => (
          <TrelloList key={list.id} title={list.title} cards={list.cards} />
        ))}
        <TrelloActionButton list />
      </div>
    </div>
  )
}

const mapStateToProps = ({ lists }) => ({
  lists
})

export default connect(mapStateToProps)(App)
