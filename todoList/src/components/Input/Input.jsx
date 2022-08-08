import React from 'react'
import styles from "./Input.css";

export default function Input(props) {
  return (
    <input
      className='Input'
      id={props.id}
      type={props.type || "text"}
      value={props.value}
      name={props.name}
      placeholder={props.title}
      checked={props.checked}
      onChange={props.inputChangeHandler}
    />
  )
}
