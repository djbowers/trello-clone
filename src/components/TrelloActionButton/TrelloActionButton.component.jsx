import React from 'react'
import TextArea from 'react-textarea-autosize'
import CardContent from '@material-ui/core/CardContent'
import Icon from '@material-ui/core/Icon'
import Card from '@material-ui/core/Card'
import Button from '@material-ui/core/Button'
import cx from 'classnames'

import styles from './TrelloActionButton.module.scss'

class TrelloActionButton extends React.Component {
  state = {
    formOpen: false,
    text: ''
  }

  openForm = () => {
    this.setState({
      formOpen: true
    })
  }

  closeForm = () => {
    this.setState({
      formOpen: false
    })
  }

  handleInputChange = e => {
    this.setState({
      text: e.target.value
    })
  }

  renderAddButton = () => {
    const { list } = this.props

    const buttonText = list ? 'Add another list' : 'Add a card'
    const buttonType = list ? styles.listButton : styles.cardButton

    return (
      <div
        onClick={this.openForm}
        className={cx(buttonType, styles.addButtonGroup)}
      >
        <Icon>add</Icon>
        <p style={{ marginLeft: 8 }}>{buttonText}</p>
      </div>
    )
  }

  renderForm = () => {
    const { list } = this.props

    const placeholder = list
      ? 'Enter list title...'
      : 'Enter a title for this card...'

    const buttonTitle = list ? 'Add List' : 'Add Card'
    const formList = list ? styles.formList : null

    return (
      <div className={formList}>
        <Card>
          <CardContent>
            <TextArea
              placeholder={placeholder}
              onBlur={this.closeForm}
              autoFocus
              value={this.state.text}
              onChange={this.handleInputChange}
              className={styles.formText}
            />
          </CardContent>
        </Card>
        <div className={styles.formButtonGroup}>
          <Button
            variant="contained"
            style={{ color: 'white', backgroundColor: '#5aac44' }}
          >
            {buttonTitle}
          </Button>
          <Icon style={{ marginLeft: 8, cursor: 'pointer' }}>close</Icon>
        </div>
      </div>
    )
  }

  render() {
    return this.state.formOpen ? this.renderForm() : this.renderAddButton()
  }
}

export default TrelloActionButton
