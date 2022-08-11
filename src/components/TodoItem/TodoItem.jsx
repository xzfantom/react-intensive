import { useRef } from 'react'
import s from './TodoItem.module.css'
import editIcon from '../../images/icons/edit-icon.svg'
import completeIcon from '../../images/icons/complete-icon.svg'
import removeIcon from '../../images/icons/delete-icon.svg'

const TodoItem = (props) => {
  const { item, updateTodo, removeTodo, completeTodo } = props

  const inputRef = useRef(true)

  const changeFocus = () => {
    inputRef.current.disabled = false
    inputRef.current.focus()
  }

  const update = (id, value, e) => {
    if (e.which === 13) {
      updateTodo({ id, item: value })
      inputRef.current.disabled = true
    }
  }

  return (
    <div className={s.todoRow}>
      <input
        className={s.input}
        ref={inputRef}
        disabled={inputRef}
        defaultValue={item.item}
        onKeyPress={(e) => update(item.id, inputRef.current.value, e)}
      />
      {item.completed && <span className={s.completed}>done</span>}
      <div className={s.iconWrap}>
        {item.completed === false && (
          <img
            className={s.icon}
            src={completeIcon}
            alt='complete button'
            onClick={() => completeTodo(item.id)}
          />
        )}

        <img
          className={s.icon}
          src={editIcon}
          alt='edit button'
          onClick={() => changeFocus()}
        />

        <img
          className={s.icon}
          src={removeIcon}
          alt='remove button'
          onClick={() => removeTodo(item.id)}
        />
      </div>
    </div>
  )
}

export default TodoItem
