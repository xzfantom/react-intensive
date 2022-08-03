import React, { useState } from 'react'
import TodoForm from '../ToDoForm/ToDoForm'
import s from './ToDo.module.css'
import editIcon from '../../images/icons/edit-icon.svg'
import deleteIcon from '../../images/icons/delete-icon.svg'

const Todo = ({ todos, completeTodo, removeTodo, updateTodo }) => {
  const [edit, setEdit] = useState({
    id: null,
    value: '',
  })

  const submitUpdate = (value) => {
    updateTodo(edit.id, value)
    setEdit({
      id: null,
      value: '',
    })
  }

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />
  }

  return todos.map((todo) => (
    <div
      className={
        todo.isComplete ? `${s.todoRow} ${s.complete}` : `${s.todoRow}`
      }
      key={todo.id}
    >
      <div key={todo.id} onClick={() => completeTodo(todo.id)}>
        {todo.text}
      </div>

      <div className={s.iconWrap}>
        <img
          className={s.icon}
          src={editIcon}
          alt='delete button'
          onClick={() => setEdit({ id: todo.id, value: todo.text })}
        />
        <img
          className={s.icon}
          src={deleteIcon}
          alt='edit button'
          onClick={() => removeTodo(todo.id)}
        />
      </div>
    </div>
  ))
}

export default Todo
