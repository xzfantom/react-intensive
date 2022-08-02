import React from 'react';
import styles from './ErrorMessage.module.css'

export default function ErrorMessage(props) {
  if (props.error === '') {
    return null;
  }
  return (
    <div className={styles.errorMessage}>{props.error}</div>
  )
}
