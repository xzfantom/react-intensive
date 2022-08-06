import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { login, logout, selectUser, selectIsLoggedIn } from './userSlice'

export default function User() {
  const [user, setUser] = useState('');
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const userName = useSelector(selectUser);
  const dispatch = useDispatch();

  const onUserChange = (event:React.ChangeEvent<HTMLInputElement>) => setUser(event.target.value);
  const onLoginClick = () => dispatch(login(user));
  const onLogoutClick = () => dispatch(logout());

  return isLoggedIn ? (
    <div>
      <h1>{userName}</h1>
      <button onClick={onLogoutClick}>Выйти</button>
    </div>
  ) : (
    <div>
      <h1>Вход не выполнен</h1>
      <input value={user} onChange={onUserChange}></input>
      <button onClick={onLoginClick}>Войти</button>
    </div>
  )

}
