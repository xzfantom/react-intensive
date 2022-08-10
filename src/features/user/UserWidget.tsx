import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logout, selectUser } from './userSlice';
import style from './UserWidget.module.css'

type Props = {
  children: JSX.Element,
};

export default function UserWidget({children}:Props) {
  const userName = useSelector(selectUser);
  const dispatch = useDispatch();

  const onLogoutClick = () => dispatch(logout());

  return (
    <span>
      <span className={style.span}>
        <span className={style.user}>{userName}</span>
        {children}
      </span>
      <button className={style.btn} onClick={onLogoutClick}>Выйти</button>
    </span>
  ) 

}
