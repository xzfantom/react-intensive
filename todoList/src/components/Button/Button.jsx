import React from 'react'
import styles from './Button.css';

export default function Button(props) {
  return (
    <button
      id={props.id}
      type={props.type || 'button'}
      name={props.name}
      onClick={props.buttonClickHandler}
    >
      {props.content}
    </button>
  )
}
