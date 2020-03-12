import React from 'react'
import Icon from '@material-ui/core/Icon'
import cx from 'classnames'

import styles from './TrelloActionButton.module.scss'

class TrelloActionButton extends React.Component {
  renderAddButton = () => {
    const { list } = this.props

    const buttonText = list ? 'Add another list' : 'Add another card'
    const buttonType = list ? styles.listButton : styles.cardButton

    return (
      <div className={cx(buttonType, styles.buttonGroup)}>
        <Icon>add</Icon>
        <p>{buttonText}</p>
      </div>
    )
  }

  render() {
    return this.renderAddButton()
  }
}

export default TrelloActionButton
