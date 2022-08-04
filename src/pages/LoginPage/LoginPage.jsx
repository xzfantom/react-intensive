import { useState } from 'react'
import BigButton from '../../components/common/BigButton/BigButton'
import s from './LoginPage.module.css'
//Todo: сделать фокус в инпуте

const LoginPage = () => {
  const [name, setName] = useState('')
  const [nameError, setNameError] = useState('')

  let isError = false

  const handleClick = () => {
    console.log('log in - click!')
  }

  const handleSubmit = () => {
    // if (name === "") {
    //   nameError = "Поле обязательное для заполнения";
    //   isError = true;
    // } else if (name.charAt(0) !== state.name.charAt(0).toUpperCase()) {
    //   nameError = "Имя должно начинаться с большой буквы";
    //   isError = true;
    // } else {
    //   nameError = "";
    // }

    reset()
  }

  const reset = () => {
    setName('')
    setNameError('')
  }

  return (
    <>
      {/* <div className={s.wrap}>
        <img src={image} className={s.image} alt='Not found page' />
      </div> */}
      <form className={s.form}>
        <label className={s.label}>
          User Name:
          <input
            className={s.input}
            type='text'
            // name={(e) => e.target.name}
            // value={(e) => e.target.value}
            placeholder='Example: Kateryna'
            onChange={handleSubmit}
          />
        </label>
        <BigButton type='button' text='submit' onClick={handleSubmit} />
      </form>
    </>
  )
}

export default LoginPage
