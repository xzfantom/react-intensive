import React, {useState} from 'react';
import {TodoInput} from './TodoInput';
import {TodoList} from './TodoList';
import {useDispatch, useSelector} from 'react-redux';
import {deleteAll} from './actions'

function Todo() {

  const dispatch = useDispatch();
  const todos = useSelector((state)=>state.operationsReducer);


  const [editFormVisibility, setEditFormVisibility]=useState(false);
  const [editTodo, setEditTodo]=useState('');

  const handleEditClick=(todo)=>{
    setEditFormVisibility(true);
    setEditTodo(todo);
  }

  const cancelUpdate=()=>{
    setEditFormVisibility(false);
  }

    return (
    <div className="wrapper">
      <br></br>
      <h1 className="text-center">ВАШ СПИСОК ДЕЛ</h1>
      <TodoInput editFormVisibility={editFormVisibility} editTodo={editTodo}
      cancelUpdate={cancelUpdate}/>
      <TodoList handleEditClick={handleEditClick} editFormVisibility={editFormVisibility}/>
      {todos.length > 1 && (
        <button className='btn btn-danger btn-md delete-all'
        onClick={()=>dispatch(deleteAll())}>Удалить все</button>
      )}
    </div>
  );
}


export {Todo}