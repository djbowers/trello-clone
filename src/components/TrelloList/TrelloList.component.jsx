import React from 'react'

import TrelloCard from '../TrelloCard'

import './TrelloList.styles.scss'

const TrelloList = ({ title, cards }) => {
  return (
    <div className="trello-list">
      <h4>{title}</h4>
      {cards.map(card => (
        <TrelloCard text={card.text} />
      ))}
    </div>
  )
}

export default TrelloList
