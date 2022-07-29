import React from 'react';
import style from './FormTextArea.module.css';

export default function FormTextArea(props) {
  const count = props.value.length;
  const message = count > 600 ? 'Превышен лимит символов в поле' : `Осталось ${count}/600 символов`;

  const handleChanges = (e) => {
    props.onChange(props.id, e);
  }

  return (
    <>
      <label htmlFor={props.id}>{props.name}</label>
      <textarea
        id={props.id}
        placeholder={props.name}
        value={props.value}
        onChange={handleChanges}
        rows='7'
      >
      </textarea>
      <div className={style.symbolsLeft}>{message}</div>
    </>
  )
}
