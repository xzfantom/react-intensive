import React from 'react'
import { Outlet, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import style from './App.module.css';
import UserWidget from './features/user/UserWidget';
import TodoCounter from './features/todo/TodoCounter';
import { selectUser, selectIsLoggedIn } from './features/user/userSlice';


export default function App() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const userName = useSelector(selectUser);

  return (
    <div>
      <div className={style.header}>
        <h1>TODO List</h1> 
        {isLoggedIn &&        
        <UserWidget>
          <TodoCounter user={userName} />
        </UserWidget>
        }
      </div>
      <nav className={style.navigation}>
        <Link to="/login">Login</Link> |{' '}
        <Link to="/todoList">TODO</Link>
      </nav>
      <div className={style.wrapper}>
        <Outlet />
      </div>
    </div>
  )
}
