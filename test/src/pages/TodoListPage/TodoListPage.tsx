import React from 'react'
import TodoForm from '../../components/TodoForm/TodoForm'
import TodoWrapper from '../../components/TodoWrapper/TodoWrapper'

export default function TodoListPage() {
  return (
    <div className='container'>
      <TodoForm />
      <TodoWrapper />
    </div>
  )
}
  