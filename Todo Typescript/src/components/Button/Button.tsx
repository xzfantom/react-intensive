import React from 'react'
import './Button.css';

interface IButtonProps {
  id?: string
  type?: "button" | "submit" | "reset",
  name?: string,
  content?: any,
  buttonClickHandler?: any
}

const Button:React.FC<IButtonProps> = (props:IButtonProps) => {
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

export default Button
