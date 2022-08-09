import React from 'react';
import styles from './Input.module.css';

const Input = (props) => {
  return (
    <input value={props.value} className={styles.input} type={props.type} placeholder={props.placeholder} onChange={props.onChange} />
  )
}

export default Input