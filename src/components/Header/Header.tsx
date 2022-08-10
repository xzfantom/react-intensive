import { Link } from 'react-router-dom'
import Navigation from '../Navigation/Navigation'
import s from './Header.module.css'
import logo from '../../images/logo.png'
import BigButton from '../common/BigButton/BigButton'
import UserMenu from '../UserMenu/UserMenu'
import { connect } from 'react-redux'

const Header = (props: { name: any }) => {
  return (
    <div className={s.headerWrap}>
      <div className={s.logoLink}>
        <img className={s.logo} src={logo} alt='logo' />
        <div className={s.logoName}>Todo List</div>
      </div>
      <Navigation name={''} />
      {!props.name ? (
        <Link to='/login'>
          <BigButton text='Log In' icon={''} disabled={false} />
        </Link>
      ) : (
        <UserMenu name={''} todos={[]} />
      )}
    </div>
  )
}

const mapStateToProps = (state: { name: string | '' }) => {
  return {
    name: state.name,
  }
}

export default connect(mapStateToProps, null)(Header)
