import React, {useState} from 'react'
import { useSelector } from 'react-redux'
import './TodoWrapper.css'
import Button from '../Button/Button';
import TodoList from '../TodoList/TodoList'
import { ITodoItem } from '../../interfaces';
import { RootState } from '../..';


const TodoWrapper: React.FC = () => {
  const todoList:Array<ITodoItem> = useSelector((state:RootState) => state.todo.todoList)
  const done:Array<ITodoItem> = todoList.filter(item => item.isDone === true)
  const undone:Array<ITodoItem> = todoList.filter(item => item.isDone !== true)

  const [tabId, setTabId] = useState<string>('undone')

  const buttonClickHandler = (event:React.MouseEvent<HTMLButtonElement>) => {
    const btn:HTMLButtonElement = event.currentTarget 
    setTabId(btn.id)
  }
  
  if (todoList.length > 0) {
    return (
      <div className='TodoWrapper'>
        <ul className='TodoTab__list'>
          <li className='TodoTab__item'>
            <Button
              id='undone'
              content='Left To Do'
              buttonClickHandler={buttonClickHandler}
            />
          </li>
          <li className='TodoTab__item'>
            <Button
              id='done'
              content='Done Todos'
              buttonClickHandler={buttonClickHandler}
            />
          </li>
        </ul>
        {tabId === 'undone' 
          ? (<TodoList todoList={todoList} filtered={undone} title='Left To Do' />)
          : (<TodoList todoList={todoList} filtered={done} title='Done Todos' />) }
      </div>
    )
  } else {
    return (
      <p className='Empty'>There is nothing to do. Add something to do, please.</p>
    )
  }
}

export default TodoWrapper
