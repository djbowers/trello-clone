import React from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'

import styles from './TrelloCard.module.scss'

const TrelloCard = ({ text }) => {
  return (
    <div className={styles.trelloCard}>
      <Card>
        <CardContent>
          <Typography>{text}</Typography>
        </CardContent>
      </Card>
    </div>
  )
}

export default TrelloCard
