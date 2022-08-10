import avatar from '../../images/default-avatar.jpg'
import s from './UserMenu.module.css'
import { connect } from 'react-redux'

const UserMenu = (props) => {
  const getActiveTodos = () =>
    props.todos.filter((todo) => !todo.completed).length

  return (
    <div className={s.wrap}>
      <span className={s.todos}>
        Active:{' '}
        <span className={s.numberTodos}>
          <span>{getActiveTodos()}</span>
        </span>
      </span>
      <img src={avatar} alt='avatar' className={s.avatar} />
      <span className={s.name}>{props.name}</span>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    name: state.name,
    todos: state.todos,
  }
}

export default connect(mapStateToProps, null)(UserMenu)
