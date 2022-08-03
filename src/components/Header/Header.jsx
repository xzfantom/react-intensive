// import { Link } from 'react-router-dom'
import Navigation from '../Navigation/Navigation'
import s from './Header.module.css'
import logo from '../images/logo.png'
// import cart from '../images/icons/cart.svg'
import BigButton from '../common/BigButton/BigButton'

const Header = () => {
  return (
    <div className={s.headerWrap}>
      <div className={s.logoLink}>
        <img className={s.logo} src={logo} alt='logo' />
        <div className={s.logoName}>Todo List</div>
      </div>
      <Navigation />
      <BigButton text='Log In' />
    </div>
  )
}

export default Header
