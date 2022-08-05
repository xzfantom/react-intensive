import { useState, useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
// import { addUser } from '../../redux/todos/todosActions'
import BigButton from '../../components/common/BigButton/BigButton'
import s from './LoginPage.module.css'

const LoginPage = () => {
  // const user = useSelector((state) => state.todos.user)
  // const dispatch = useDispatch()

  // const inputRef = useRef(null)

  // useEffect(() => {
  //   inputRef.current.focus()
  // }, [])

  // const handleSubmit = (e) => {
  //   e.preventDefault()
  //   // if (user.trim() === '') {
  //   //   alert('Please, enter your name')
  //   // }
  //   dispatch(addUser(user))
  //   // setValue('')
  // }

  // console.log(user)

  // const onChangeInput = (e) => {
  //   const { value } = e.target
  // }

  return (
    <>
      <form className={s.form}>
        <label className={s.label}>
          User Name:
          <input
            className={s.input}
            type='text'
            name='name'
            // value={user}
            placeholder='Example: Kateryna'
            // onChange={(e) => dispatch(addUser(e.currentTarget.value))}
            // ref={inputRef}
          />
        </label>
        <BigButton
          type='button'
          text='submit'
          //  onClick={handleSubmit}
        />
      </form>
    </>
  )
}

export default LoginPage
