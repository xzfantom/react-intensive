import React from 'react'

export default function FormInput(props) {
  const type = props.type || 'text';

  const handleChanges = (e) => {
    props.onChange(props.id, e);
  }

  return (
    <>
      <label htmlFor={props.id}>{props.name}</label>
      <input
        type={type}
        id={props.id}
        placeholder={props.name}
        value={props.value}
        onChange={handleChanges}>
      </input>
    </>
  )
}
