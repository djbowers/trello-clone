import React from 'react'
import { Droppable, Draggable } from 'react-beautiful-dnd'

import TrelloCard from '../TrelloCard'
import TrelloActionButton from '../TrelloActionButton'
import styles from './TrelloList.module.scss'

const TrelloList = ({ title, cards, listId, index }) => {
  return (
    <Draggable draggableId={String(listId)} index={index}>
      {provided => (
        <div
          className={styles.container}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <Droppable droppableId={String(listId)}>
            {provided => (
              <div ref={provided.innerRef} {...provided.droppableProps}>
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
        </div>
      )}
    </Draggable>
  )
}

export default TrelloList
