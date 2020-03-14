import React from 'react'
import Card from '@material-ui/core/Card'
import { Draggable } from 'react-beautiful-dnd'

import styles from './TrelloCard.module.scss'

const TrelloCard = ({ text, cardId, index }) => {
  return (
    <Draggable draggableId={String(cardId)} index={index}>
      {provided => (
        <div
          className={styles.container}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <Card className={styles.content}>{text}</Card>
        </div>
      )}
    </Draggable>
  )
}

export default TrelloCard
