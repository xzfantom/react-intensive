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
        home
      </div>

      <div
        // exact
        // to='/about'
        className={s.navLink}
        // activeClassName={s.activeLink}
      >
        about
      </div>
    </nav>
  )
}

export default Navigation
