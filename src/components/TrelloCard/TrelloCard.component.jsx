import React from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'

const TrelloCard = ({ text }) => {
  return (
    <div className="trello-card">
      <Card>
        <CardContent>
          <Typography>{text}</Typography>
        </CardContent>
      </Card>
    </div>
  )
}

export default TrelloCard
