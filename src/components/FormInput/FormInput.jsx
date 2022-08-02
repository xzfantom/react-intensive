import React from 'react'
import style from './FormInput.module.css'

export default function FormInput(props) {
  const type = props.type || 'text';

  const handleChanges = (e) => {
    props.onChange(props.id, e);
  }

  return (
    <>
      <label className={style.label} htmlFor={props.id}>{props.name}</label>
      <input
        className={style.input}
        type={type}
        id={props.id}
        placeholder={props.name}
        value={props.value}
        onChange={handleChanges}>
      </input>
    </>
  )
}
