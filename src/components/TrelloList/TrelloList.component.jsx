import React from 'react'
import { Droppable } from 'react-beautiful-dnd'

import TrelloCard from '../TrelloCard'
import TrelloActionButton from '../TrelloActionButton'
import styles from './TrelloList.module.scss'

const TrelloList = ({ title, cards, listId }) => {
  return (
    <Droppable droppableId={String(listId)}>
      {provided => (
        <div
          className={styles.container}
          ref={provided.innerRef}
          {...provided.droppableProps}
        >
          <div className={styles.title}>{title}</div>
          {cards.map((card, index) => (
            <TrelloCard
              key={card.id}
              index={index}
              text={card.text}
              cardId={card.id}
            />
          ))}
          {provided.placeholder}
          <TrelloActionButton listId={listId} />
        </div>
      )}
    </Droppable>
  )
}

export default TrelloList
