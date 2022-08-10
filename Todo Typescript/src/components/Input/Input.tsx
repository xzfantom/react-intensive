import React from 'react'
import "./Input.css";

interface IInput {
  id?: string,
  type?: 'text' | 'checkbox',
  value?: string,
  name?: string,
  placeholder?: string,
  title?: string,
  checked?: boolean,
  readOnly?: boolean,
  inputChangeHandler?: any
}

const Input:React.FC<IInput> = (props) => {
  return (
    <input
      className='Input'
      id={props.id}
      type={props.type || "text"}
      value={props.value}
      name={props.name}
      placeholder={props.title}
      checked={props.checked}
      readOnly={props.readOnly}
      onChange={props.inputChangeHandler}
    />
  )
}

export default Input