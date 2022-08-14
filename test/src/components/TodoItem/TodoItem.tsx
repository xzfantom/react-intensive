import React, {useState} from 'react'
import { ReactComponent as DeleteSvg } from "../Icons/delete.svg";
import { ReactComponent as EditSvg } from "../Icons/edit.svg";
import Input from '../Input/Input'
import {useDispatch, useSelector} from "react-redux";
import {deleteTodo, editTodo, toggleTodo} from '../../redux/actions';
import Button from '../Button/Button';
import './TodoItem.css';
import { RootState } from '../..';
import { ITodoItem } from '../../interfaces';

interface IUpdatedTodo {
  title: string,
  id: string,
}

const TodoItem:React.FC<ITodoItem> = (props) => {
  const dispatch = useDispatch()
  const todoItem = useSelector((state:RootState) => state.todo.todoList.find(item => item.id === props.id))

  const [readOnly, setReadOnly] = useState<boolean>(true)
  const [newTitle, setNewTitle] = useState<string>(todoItem?.title || '')

  const deleteButtonClickHandler = (event:React.ChangeEvent) => dispatch(deleteTodo(event.target.id))
  const todoTitleInputChange = (event:React.ChangeEvent<HTMLInputElement  >) => setNewTitle(event.target.value)  
  
  const checkboxChangeHandler = () => dispatch(toggleTodo(props.id))
  const editButtonClickHandler = () => {
    setReadOnly(!readOnly)
    const updatedTodo:IUpdatedTodo = {
      title: newTitle,
      id: props.id
    }
    dispatch(editTodo(updatedTodo))
  }

  return (
    <>
      {todoItem && (
        <div className='todoItem'>
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

export default TodoItem