import React from 'react'

import TrelloCard from '../TrelloCard'
import TrelloActionButton from '../TrelloActionButton'
import styles from './TrelloList.module.scss'

const TrelloList = ({ title, cards }) => {
  return (
    <div className={styles.trelloList}>
      <div className={styles.listTitle}>{title}</div>
      {cards.map(card => (
        <TrelloCard key={card.id} text={card.text} />
      ))}
      <TrelloActionButton />
    </div>
  )
}

export default TrelloList
