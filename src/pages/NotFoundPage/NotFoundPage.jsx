import BigButton from '../../components/common/BigButton/BigButton'
import s from './NotFoundPage.module.css'
import image from '../../components/images/frame.png'

const NotFoundPage = () => {
  return (
    <>
      <img src={image} className={s.image} alt='Not found page' />
      <h1 className={s.message}>404 - Not Found Page</h1>
      <BigButton text='go home' />
    </>
  )
}

export default NotFoundPage
