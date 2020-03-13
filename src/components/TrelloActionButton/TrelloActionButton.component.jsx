import React from 'react'
import { connect } from 'react-redux'
import TextArea from 'react-textarea-autosize'
import Icon from '@material-ui/core/Icon'
import Card from '@material-ui/core/Card'
import Button from '@material-ui/core/Button'
import cx from 'classnames'

import { addList, addCard } from '../../redux/actions'
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

  handleAddList = () => {
    const { dispatch } = this.props
    const { text } = this.state

    if (text) {
      this.setState({
        text: ''
      })
      dispatch(addList(text))
    }

    return
  }

  handleAddCard = () => {
    const { dispatch } = this.props
    const { text } = this.state
    const { listId } = this.props

    if (text) {
      this.setState({
        text: ''
      })
      dispatch(addCard(text, listId))
    }

    return
  }

  renderAddButton = () => {
    const { list } = this.props

    const buttonText = list ? 'Add another list' : 'Add a card'
    const buttonStyle = list ? styles.listStyle : styles.cardStyle

    return (
      <div
        onClick={this.openForm}
        className={cx(styles.addButtonContainer, buttonStyle)}
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

    const wrapList = list ? styles.formList : null
    const buttonTitle = list ? 'Add List' : 'Add Card'
    const buttonAction = list ? this.handleAddList : this.handleAddCard

    return (
      <div className={wrapList}>
        <Card className={styles.formContent}>
          <TextArea
            placeholder={placeholder}
            onBlur={this.closeForm}
            autoFocus
            value={this.state.text}
            onChange={this.handleInputChange}
            className={styles.formText}
          />
        </Card>
        <div className={styles.formButtonContainer}>
          <Button
            onMouseDown={buttonAction}
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

export default connect()(TrelloActionButton)
