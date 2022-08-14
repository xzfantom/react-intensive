import React from 'react'
import './Button.css';

interface IButtonProps {
  id?: string
  type?: "button" | "submit" | "reset",
  name?: string,
  content?: any,
  buttonClickHandler?: any,
  className?: string
}

const Button:React.FC<IButtonProps> = (props:IButtonProps) => {
  return (
    <button
      className={props.className}
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
