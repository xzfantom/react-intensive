// import { NavLink } from 'react-router-dom'
import s from './Navigation.module.css'

const Navigation = () => {
  return (
    <nav className={s.navWrap}>
      <div
        // exact to='/'

        className={s.navLink}
        //  activeClassName={s.activeLink}
      >
        about
      </div>

      <div
        // exact
        // to='/contacts'
        className={s.navLink}
        // activeClassName={s.activeLink}
      >
        to do list
      </div>
    </nav>
  )
}

export default Navigation
