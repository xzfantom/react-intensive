import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login, logout, selectUser, selectIsLoggedIn } from './userSlice';
import style from './User.module.css';

export default function User() {
  const [user, setUser] = useState('');
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const userName = useSelector(selectUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onUserChange = (event:React.ChangeEvent<HTMLInputElement>) => setUser(event.target.value);
  
  const onLoginClick = () => {
    if (user){
      dispatch(login(user));
      navigate('/todoList');
    }
  }

  const onLogoutClick = () => dispatch(logout());

  const onKeyUp = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      onLoginClick();
    }
  }

  return (
    <div className={style.wrapper}>
      {isLoggedIn ? (
        <>
          <h1>{userName}</h1>
          <button type='button' className={style.btn} onClick={onLogoutClick}>Выйти</button>
        </>
      ) : (
        <>
          <h2>Пожалуйста, войдите</h2>
          <input value={user} onChange={onUserChange} onKeyUp={onKeyUp}></input>
          <button type='button' className={style.btn} onClick={onLoginClick}>Войти</button>
        </>
      )
    }
    </div>
    
  )

}
