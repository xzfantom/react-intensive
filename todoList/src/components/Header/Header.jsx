import React from 'react'
import styles from './Header.css';
import { useSelector } from 'react-redux';

export default function Header() {
  const name = useSelector((state) => state.login.name)
  const todoQuantity = useSelector(state => state.todo.todoList).filter(item => item.isDone !== true)

  return (
    <div className='Header'>
     <div className='Container'>
        <div className='Header__inner'>
          <h1>Welcome, {name || 'Stranger'}!</h1>
          {todoQuantity.length > 0 
              ? todoQuantity.length === 1 
                  ? (<p>You have {todoQuantity.length} task.</p>)
                  : (<p>You have {todoQuantity.length} tasks.</p>)
              : '' }
        </div>
      </div>
    </div>
  )
}
