import React from 'react';
import styles from './ErrorMessage.module.css'

class ErrorMessage extends React.Component {
  render() {
    if (this.props.error === '') {
      return null;
    }

    return (
      <div className={styles.errorMessage}>{this.props.error}</div>
    )
  }
}

export default ErrorMessage;