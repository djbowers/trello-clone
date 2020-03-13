import React from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'

import styles from './TrelloCard.module.scss'

const TrelloCard = ({ text }) => {
  return (
    <div className={styles.trelloCard}>
      <Card>
        <CardContent>{text}</CardContent>
      </Card>
    </div>
  )
}

export default TrelloCard
