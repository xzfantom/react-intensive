import React from 'react'
import styles from './TodoListPage.css'
import TodoForm from '../../components/TodoForm/TodoForm'
import TodoWrapper from '../../components/TodoWrapper/TodoWrapper'

export default function TodoListPage() {
  return (
    <div className='Container'>
      <TodoForm />
      <TodoWrapper />
    </div>
  )
}
  