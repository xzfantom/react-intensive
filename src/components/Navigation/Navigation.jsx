import { NavLink } from 'react-router-dom'
import s from './Navigation.module.css'

const Navigation = () => {
  return (
    <nav className={s.navWrap}>
      <NavLink
        exact
        to='/'
        className={s.navLink}
        activeClassName={s.activeLink}
      >
        about
      </NavLink>
      <NavLink
        exact
        to='/todos'
        className={s.navLink}
        activeClassName={s.activeLink}
      >
        todos
      </NavLink>
    </nav>
  )
}

export default Navigation
