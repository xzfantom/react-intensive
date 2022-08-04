import avatar from '../../images/default-avatar.jpg'
import s from './UserMenu.module.css'

const UserMenu = ({ name = 'Kateryna' }) => {
  return (
    <div className={s.wrap}>
      <img src={avatar} alt='avatar' className={s.avatar} />
      <span className={s.name}>{name}</span>
    </div>
  )
}

export default UserMenu
