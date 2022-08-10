import React, { useState } from 'react'
import './TodoForm.css'
import { useDispatch, useSelector } from 'react-redux';
import Input from '../Input/Input'
import Button from '../Button/Button'
import { addTodo } from '../../redux/actions';
import { ITodoItem } from '../../interfaces';

export default function TodoForm() {
  const [todoTitle, setTodoTitle] = useState<string>('');
  const dispatch = useDispatch();

  const newTodo:ITodoItem = {
    title: todoTitle,
    id: Date.now().toString(),
    isDone: false
  }

  const formSubmitHandler = (event:React.SyntheticEvent) => {
    event.preventDefault();
    if(!todoTitle) {
      return
    }
    dispatch(addTodo(newTodo))
    setTodoTitle('')
  }

  return (
    <form className='TodoForm' onSubmit={formSubmitHandler}>
      <h2>Add To Do</h2>
      <div className='TodoForm__row'>
        <label>
          <Input
            title='Place for your todo'
            value={todoTitle}
            name='todoTitle'
            inputChangeHandler={(event:React.ChangeEvent<HTMLInputElement>) => setTodoTitle(event.target.value)}
          />
        </label>
        <Button
          type='submit'
          name='submit'
          content='Add Todo'
        />
      </div>
    </form>
  )
}
