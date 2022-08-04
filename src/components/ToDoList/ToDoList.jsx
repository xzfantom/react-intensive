import React, { useState, useEffect } from 'react'
import s from './ToDoList.module.css'
import TodoForm from './ToDoForm/ToDoForm'
import Todo from './ToDo/Todo'
import * as storage from '../../services/localStorage'
import Tab from '../Tab/Tab'

const STORAGE_KEY = 'todos'

function TodoList() {
  const [todos, setTodos] = useState(() => storage.get(STORAGE_KEY) ?? [])

  useEffect(() => {
    storage.save(STORAGE_KEY, todos)
  }, [todos])

  // ***************  ADD  *************** //

  const addTodo = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return
    }

    const newTodos = [todo, ...todos]

    setTodos(newTodos)
  }

  // ***************  UPDATE  *************** //
  const updateTodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return
    }

    setTodos((prev) =>
      prev.map((item) => (item.id === todoId ? newValue : item))
    )
  }

  // ***************  REMOVE  *************** //

  const removeTodo = (id) => {
    const removedArr = [...todos].filter((todo) => todo.id !== id)

    setTodos(removedArr)
  }

  // ***************  COMPLETE  *************** //

  const completeTodo = (id) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete
      }
      return todo
    })
    setTodos(updatedTodos)
  }

  const getActiveTodos = () => {
    return todos.filter((el) => !el.isComplete).length
  }
  // console.log('🍒 activeTodos', getActiveTodos())

  return (
    <>
      <div className={s.wrap}>
        <h1 className={s.title}>What's the Plan for Today?</h1>
        <TodoForm onSubmit={addTodo} />
        {/* <div className={s.container}>
          <button
            className={s.button}
            type='button'
            // onClick={}
          >
            active
          </button>
          <button
            className={s.button}
            type='button'
            // onClick={}
          >
            completed
          </button>
        </div> */}
      </div>
      <Todo
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
      />
    </>
  )
}

export default TodoList
