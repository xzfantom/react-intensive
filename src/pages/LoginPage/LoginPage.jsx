import { useState, useEffect, useRef } from 'react'
import BigButton from '../../components/common/BigButton/BigButton'
import s from './LoginPage.module.css'
//Todo: сделать фокус в инпуте

const LoginPage = () => {
  const [user, setUser] = useState('')
  const [value, setValue] = useState('')

  const inputRef = useRef(null)

  useEffect(() => {
    inputRef.current.focus()
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (value.trim() === '') {
      alert('Please, enter your name')
    }
    setUser(value)
    setValue('')
  }

  console.log(user)
  const onChangeInput = (e) => {
    const { value } = e.target
    setValue(value)
  }

  return (
    <>
      <form className={s.form} onSubmit={handleSubmit}>
        <label className={s.label}>
          User Name:
          <input
            className={s.input}
            type='text'
            name='name'
            value={value}
            placeholder='Example: Kateryna'
            onChange={onChangeInput}
            ref={inputRef}
          />
        </label>
        <BigButton type='button' text='submit' onClick={handleSubmit} />
      </form>
    </>
  )
}

export default LoginPage
