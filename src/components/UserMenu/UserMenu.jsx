import avatar from '../../images/default-avatar.jpg'
import s from './UserMenu.module.css'

const UserMenu = ({ name = 'Kateryna', activeTodos = 3 }) => {
  return (
    <div className={s.wrap}>
      <span className={s.todos}>
        Active: <span className={s.numberTodos}>{activeTodos}</span>
      </span>
      <img src={avatar} alt='avatar' className={s.avatar} />
      <span className={s.name}>{name}</span>
    </div>
  )
}

export default UserMenu
