import avatar from '../../images/default-avatar.jpg'
import s from './UserMenu.module.css'
import { connect } from 'react-redux'

interface ITodo {
  completed: boolean
  id: number
  item: string
}

interface IProps {
  name: string | ''
  todos: ITodo[]
}

const UserMenu = (props: IProps) => {
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

const mapStateToProps = (state: { name: any; todos: any }) => {
  return {
    name: state.name,
    todos: state.todos,
  }
}

export default connect(mapStateToProps, null)(UserMenu)
