import BigButton from '../../components/common/BigButton/BigButton'
import { useHistory, useLocation } from 'react-router-dom'
import s from './NotFoundPage.module.css'
import image from '../../components/images/frame.png'

const NotFoundPage = () => {
  const history = useHistory()
  const location = useLocation()

  const onGoBack = () => {
    history.push(location?.state?.from ?? '/')
  }

  return (
    <>
      <img src={image} className={s.image} alt='Not found page' />
      <h1 className={s.message}>404 - Not Found Page</h1>
      <BigButton text='go home' onClick={onGoBack} />
    </>
  )
}

export default NotFoundPage
