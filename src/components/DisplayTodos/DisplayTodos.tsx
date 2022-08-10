import React, { useState } from 'react'
import { connect } from 'react-redux'
import {
  addTodos,
  completeTodos,
  removeTodos,
  updateTodos,
} from '../../redux/reducer'
import TodoItem from '../TodoItem/TodoItem'
import s from './DisplayTodos.module.css'

interface ITodo {
  completed: boolean
  id: number
  item: string
}

interface IProps {
  todos: ITodo[]
  completeTodo: (id: number) => void
  removeTodo: (id: number) => void
  updateTodo: (e: React.ChangeEvent<HTMLInputElement>, id: number) => void
}

const DisplayTodos = (props: IProps) => {
  const [sort, setSort] = useState('active')

  return (
    <div className={s.container}>
      {props.todos.length > 0 && (
        <div className={s.btnWrap}>
          <button
            className={sort === 'active' ? s.active : s.button}
            type='button'
            onClick={() => setSort('active')}
          >
            active
          </button>
          <button
            className={sort === 'completed' ? s.active : s.button}
            type='button'
            onClick={() => setSort('completed')}
          >
            completed
          </button>
          <button
            className={sort === 'all' ? s.active : s.button}
            type='button'
            onClick={() => setSort('all')}
          >
            all
          </button>
        </div>
      )}

      {props.todos.length > 0 && sort === 'active'
        ? props.todos.map((item: { completed: boolean; id: number }) => {
            return (
              item.completed === false && (
                <TodoItem
                  key={item.id}
                  item={item}
                  removeTodo={props.removeTodo}
                  updateTodo={props.updateTodo}
                  completeTodo={props.completeTodo}
                />
              )
            )
          })
        : null}
      {/* COMPLETED */}
      {props.todos.length > 0 && sort === 'completed'
        ? props.todos.map((item: { completed: boolean; id: number }) => {
            return (
              item.completed === true && (
                <TodoItem
                  key={item.id}
                  item={item}
                  removeTodo={props.removeTodo}
                  updateTodo={props.updateTodo}
                  completeTodo={props.completeTodo}
                />
              )
            )
          })
        : null}
      {/* ALL */}
      {props.todos.length > 0 && sort === 'all'
        ? props.todos.map((item: { id: number; completed: boolean }) => {
            return (
              <TodoItem
                key={item.id}
                item={item}
                removeTodo={props.removeTodo}
                updateTodo={props.updateTodo}
                completeTodo={props.completeTodo}
              />
            )
          })
        : null}
    </div>
  )
}

const mapStateToProps = (state: { todos: ITodo[] }) => {
  return {
    todos: state.todos,
  }
}

const mapDispatchToProps = (
  dispatch: (arg0: { payload: any; type: string }) => any
) => {
  return {
    addTodo: (obj: any) => dispatch(addTodos(obj)),
    removeTodo: (id: any) => dispatch(removeTodos(id)),
    updateTodo: (obj: any) => dispatch(updateTodos(obj)),
    completeTodo: (id: any) => dispatch(completeTodos(id)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DisplayTodos)
