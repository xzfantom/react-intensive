import React, {useState} from 'react'
import { useNavigate } from 'react-router'
import { useDispatch } from 'react-redux'
import './LoginForm.css'
import Input from '../Input/Input'
import Button from '../Button/Button'
import { ERROR_MESSAGES } from '../../ERROR_MESSAGES'
import { loginName } from '../../redux/actions'

const LoginForm: React.FC = () => {
  const NAME:string = 'Name'
  const [name, setName] = useState<string>('')
  const [error, setError] = useState<boolean>(false)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const formSubmitHandler = (event:React.SyntheticEvent) => {
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
      <form className='LoginForm' onSubmit={formSubmitHandler}>
        {error ? <p className='Error'>{ERROR_MESSAGES.emptyField}</p> : <h2>Log In</h2>}
        <div className='LoginForm__row'>
        <label>
          <Input
            value={name}
            title={NAME}
            name='name'
            inputChangeHandler={(event:React.ChangeEvent<HTMLInputElement>) => setName(event.target.value)}
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

export default LoginForm
