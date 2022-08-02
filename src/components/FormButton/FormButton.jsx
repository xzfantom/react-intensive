import React from 'react'
import style from './FormButton.module.css'

export default function FormButton(props) {
  return (
    <>
      <button
        className={style.button}
        type="button"
        name={props.name}
        onClick={props.onClick}>
        {props.caption}
      </button>
    </>
  )
}
