import React from 'react'
import { ReactComponent as DeleteSvg } from "../Icons/delete.svg";
import Input from '../Input/Input'
import {useDispatch, useSelector} from "react-redux";
import {deleteTodo, toggleTodo} from '../../redux/actions';
import Button from '../Button/Button';
import styles from './TodoItem.css';

export default function TodoItem(props) {
  const dispatch = useDispatch()
  const todoItem = useSelector(state => state.todo.todoList.find(item => item.id === props.id))
  const inputChangeHandler = () => dispatch(toggleTodo(props.id))

  const buttonClickHandler = (event) => dispatch(deleteTodo(event.target.id))
 
  return (
    <>
      {todoItem && (
        <label className='TodoItem'>
          <Input
            type='checkbox'
            id={props.id}
            checked={todoItem.isDone}
            inputChangeHandler={inputChangeHandler}
          />
          <p>{todoItem.title}</p>
          <Button
            id={props.id}
            type='reset'
            name='delete'
            content={<DeleteSvg width='15' height='15' />}
            buttonClickHandler={buttonClickHandler}
          />
        </label>
      )}
    </>
  )
}