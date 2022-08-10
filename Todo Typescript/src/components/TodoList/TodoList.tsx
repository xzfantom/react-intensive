import React from 'react'
import { ITodoItem } from '../../interfaces';
import TodoItem from '../TodoItem/TodoItem';

interface ITodoList {
  title: string,
  todoList: Array<ITodoItem>,
  filtered: Array<ITodoItem>,
}

const TodoList:React.FC<ITodoList> = (props) => {
  const todoList = props.todoList
  const filtered = props.filtered

  return (
    <>
    <h3>{props.title}</h3>
      <ul className='TodoWrapper__list'>
        {filtered.map(todo => (
          <li className="TodoWrapper__item">
            <TodoItem id={todo.id} isDone={todo.isDone} title={todo.title} key={todo.id} />
           </li>
        ))}
      </ul>
    </>
  )
}


export default TodoList