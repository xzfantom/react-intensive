import React from 'react'
import './Header.css';
import { useSelector } from 'react-redux';
import { RootState } from '../..';

const Header:React.FC = () => {
  const name:string = useSelector((state:RootState) => state.login.name)
  const todoQuantity = useSelector((state:RootState) => state.todo.todoList).filter(item => item.isDone !== true)

  return (
    <div className='header'>
     <div className='container'>
        <div className='header__inner'>
          <h1 className='header__title'>Welcome, {name || 'Newcomer'}!</h1>
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

export default Header
