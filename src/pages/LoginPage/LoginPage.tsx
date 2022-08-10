import { useState, ChangeEvent } from 'react'
import { connect } from 'react-redux'
import BigButton from '../../components/common/BigButton/BigButton'
import s from './LoginPage.module.css'
import { setUser } from '../../redux/reducer'
import { useHistory } from 'react-router-dom'

const LoginPage = (props: {
  setUser: (arg0: { name: string; todos: never[] }) => void
}) => {
  const history = useHistory()
  const [userName, setUserName] = useState('')
  const [error, setError] = useState(false)

  const handleSubmit: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault()

    if (userName.trim() !== '') {
      setError(false)
      props.setUser({ name: userName, todos: [] })
      history.push('/todos')
    } else {
      setError(true)
    }
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value)
  }

  return (
    <>
      <form className={s.form}>
        <label className={s.label}>
          User Name:
          {error && <span className={s.error}>* Required textfield</span>}
          <input
            className={s.input}
            type='text'
            name='name'
            value={userName}
            placeholder='Example: Kateryna'
            onChange={(e) => handleChange(e)}
          />
        </label>
        <BigButton
          type='button'
          text='submit'
          onClick={handleSubmit}
          icon={''}
          disabled={false}
        />
      </form>
    </>
  )
}

const mapDispatchToProps = (
  dispatch: (arg0: { payload: any; type: string }) => any
) => {
  return {
    setUser: (obj: any) => dispatch(setUser(obj)),
  }
}

export default connect(null, mapDispatchToProps)(LoginPage)
