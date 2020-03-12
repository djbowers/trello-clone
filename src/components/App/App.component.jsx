import React from 'react'
import { connect } from 'react-redux'

import TrelloList from '../TrelloList'

const App = ({ lists }) => {
  return (
    <div className="app">
      <div className="app-title">Trello Clone</div>
      <div className="list-container">
        {lists.map(list => (
          <TrelloList key={list.id} title={list.title} cards={list.cards} />
        ))}
      </div>
    </div>
  )
}

const mapStateToProps = ({ lists }) => ({
  lists
})

export default connect(mapStateToProps)(App)
