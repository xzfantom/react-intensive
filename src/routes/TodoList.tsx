import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectUser, selectIsLoggedIn } from '../features/user/userSlice';
import { Navigate } from "react-router-dom";
import Todos from '../features/todo/Todos'
import TabContainer from '../components/TabContainer/TabContainer';
import style from './TodoList.module.css'

export default function TodoList() {
  const userName = useSelector(selectUser);
  const [filter, setFilter] = useState('all');
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <div className={style.wrapper}>  
      {!isLoggedIn && (<Navigate to='/login' replace={true} />)}    
      <TabContainer filter={filter} handleChange={setFilter}/>
      <Todos user={userName} filter={filter}/>
    </div>
  )
}
