import React, {useState} from 'react'
import { useNavigate } from 'react-router'
import { useDispatch } from 'react-redux'
import styles from './LoginForm.css'
import Input from '../Input/Input'
import Button from '../Button/Button'
import { ERROR_MESSAGES } from '../../ERROR_MESSAGES'
import { loginName } from '../../redux/actions'

export default function LoginForm() {
  const NAME = 'Name'
  const [name, setName] = useState('')
  const [error, setError] = useState(false)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const formSubmitHandler = (event) => {
    event.preventDefault()
    if(!name) {
      setError(true)
    } else {
      setError(false)
      dispatch(loginName(name))
      setName('')
      navigate('/todo_list')
    }
  }

  return (
    <>
      <form className='LoginForm' on onSubmit={formSubmitHandler}>
        {error ? <p className='Error'>{ERROR_MESSAGES.emptyField}</p> : <h2>Log In</h2>}
        <div className='LoginForm__row'>
        <label>
          <Input
            value={name}
            title={NAME}
            name='name'
            inputChangeHandler={event => setName(event.target.value)}
          />
        </label>
        <Button 
          type='submit'
          name='submit'
          content='Log In'
        />
        </div>
      </form>
    </>
  )
}
