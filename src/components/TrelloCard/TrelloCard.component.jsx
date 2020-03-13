import React from 'react'
import Card from '@material-ui/core/Card'

import styles from './TrelloCard.module.scss'

const TrelloCard = ({ text }) => {
  return (
    <div className={styles.container}>
      <Card className={styles.content}>{text}</Card>
    </div>
  )
}

export default TrelloCard
