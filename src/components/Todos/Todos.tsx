import { useState, ChangeEvent } from 'react'
import { connect } from 'react-redux'
import { addTodos } from '../../redux/reducer'
import s from './Todos.module.css'

const Todos = (props: {
  addTodo: (arg0: { id: number; item: string; completed: boolean }) => void
}) => {
  const [todo, setTodo] = useState('')

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value)
  }

  const add = () => {
    if (todo === '') {
      alert('Input is Empty')
    } else {
      props.addTodo({
        id: Math.floor(Math.random() * 1000),
        item: todo,
        completed: false,
      })
      setTodo('')
    }
  }

  return (
    <div className={s.todoForm}>
      <input
        className={s.todoInput}
        type='text'
        onChange={(e) => handleChange(e)}
        placeholder='Add a todo'
        value={todo}
      />
      <button onClick={() => add()} className={s.todoButton}>
        Add todo
      </button>
    </div>
  )
}

const mapStateToProps = (state: any) => {
  return {
    todos: state,
  }
}

const mapDispatchToProps = (
  dispatch: (arg0: { payload: any; type: string }) => any
) => {
  return {
    addTodo: (obj: any) => dispatch(addTodos(obj)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Todos)
