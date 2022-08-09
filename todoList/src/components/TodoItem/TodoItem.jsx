import React, {useState} from 'react'
import { ReactComponent as DeleteSvg } from "../Icons/delete.svg";
import { ReactComponent as EditSvg } from "../Icons/edit.svg";
import Input from '../Input/Input'
import {useDispatch, useSelector} from "react-redux";
import {deleteTodo, editTodo, toggleTodo} from '../../redux/actions';
import Button from '../Button/Button';
import styles from './TodoItem.css';

export default function TodoItem(props) {
  const dispatch = useDispatch()
  const todoItem = useSelector(state => state.todo.todoList.find(item => item.id === props.id))

  const [readOnly, setReadOnly] = useState(true)
  const [newTitle, setNewTitle] = useState(todoItem.title)

  const deleteButtonClickHandler = (event) => dispatch(deleteTodo(event.target.id))
  const todoTitleInputChange = (event) => setNewTitle(event.target.value)  
  const checkboxChangeHandler = () => dispatch(toggleTodo(props.id))
  const editButtonClickHandler = () => {
    setReadOnly(!readOnly)
    const updatedTodo = {
      title: newTitle,
      id: props.id
    }
    dispatch(editTodo(updatedTodo))
  }

  return (
    <>
      {todoItem && (
        <div className='TodoItem'>
          <Input
            type='checkbox'
            id={props.id}
            checked={todoItem.isDone}
            inputChangeHandler={checkboxChangeHandler}
          />
          <Input 
            id={props.id}
            value={newTitle}
            name={props.id}
            readOnly={readOnly}
            inputChangeHandler={todoTitleInputChange}
          />
          <Button
            name='edit'
            content={<EditSvg width='20' height='20' />}
            buttonClickHandler={editButtonClickHandler}
          />
          <Button
            id={props.id}
            type='reset'
            name='delete'
            content={<DeleteSvg width='15' height='15' />}
            buttonClickHandler={deleteButtonClickHandler}
          />
        </div>
      )}
    </>
  )
}