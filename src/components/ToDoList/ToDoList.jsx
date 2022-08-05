import React, { useEffect } from 'react'
import s from './ToDoList.module.css'
import TodoForm from './ToDoForm/ToDoForm'
import Todo from './ToDo/Todo'
import * as storage from '../../services/localStorage'
// import Tab from '../Tab/Tab'
import * as actions from '../../redux/todos/todosActions'
import { useSelector, useDispatch } from 'react-redux'

const STORAGE_KEY = 'todos'

function TodoList() {
  const todos = useSelector((state) => state.todos.items)
  const dispatch = useDispatch()

  useEffect(() => {
    storage.save(STORAGE_KEY, todos)
  }, [todos])

  const addTodo = (newTodo) => {
    if (!newTodo.text || /^\s*$/.test(newTodo.text)) {
      return
    }
    dispatch(actions.addTodo(newTodo))
  }

  // ***************  UPDATE  *************** //
  const updateTodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return
    }
    dispatch(actions.editTodo(todoId, newValue))
    //   setTodos((prev) =>
    //     prev.map((item) => (item.id === todoId ? newValue : item))
    //   )
  }

  const removeTodo = (id) => {
    dispatch(actions.removeTodo(id))
  }

  // ***************  COMPLETE  *************** //
  const completeTodo = (id) => {
    dispatch(actions.completeTodo(id))
    // let updatedTodos = todos.map((todo) => {
    //   if (todo.id === id) {
    //     todo.isComplete = !todo.isComplete
    //   }
    //   return todo
    // })
    // setTodos(updatedTodos)
  }

  // const getActiveTodos = () => {
  //   return todos.filter((el) => !el.isComplete).length
  // }
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
        updateTodo={updateTodo}
        removeTodo={removeTodo}
      />
    </>
  )
}

export default TodoList
