import React from 'react'
import User from '../features/user/User';
import style from './Authentication.module.css'

export default function Authentication() {
  return (
    <div className={style.wrapper}>
      <h1>Добро пожаловать!</h1>
      <User />
    </div>
  )
}
