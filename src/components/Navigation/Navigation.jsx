import { NavLink } from 'react-router-dom'
import s from './Navigation.module.css'
import { connect } from 'react-redux'

const Navigation = (props) => {
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
      {props.name && (
        <NavLink
          exact
          to='/todos'
          className={s.navLink}
          activeClassName={s.activeLink}
        >
          todos
        </NavLink>
      )}
    </nav>
  )
}

const mapStateToProps = (state) => {
  return {
    name: state.name,
  }
}

export default connect(mapStateToProps, null)(Navigation)
