import React from 'react'

import TrelloCard from '../TrelloCard'

import './TrelloList.styles.scss'

const TrelloList = ({ title, cards }) => {
  return (
    <div className="trello-list">
      <div className="list-title">{title}</div>
      {cards.map(card => (
        <TrelloCard key={card.id} text={card.text} />
      ))}
    </div>
  )
}

export default TrelloList
