import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import TodoItem from '../../components/TodoItem/TodoItem';
import { todoAdded, todoToggled, todoChanged, todoRemoved, selectTodos } from './todoSlice';
import addTodoImage from './images/addTodo.png';
import style from './Todos.module.css';

type Props = {
  user: string,
  filter: string
}

export default function Todos(props:Props) {
  const dispatch = useDispatch();
  const [todoText, setTodoText] = useState('');
  const {filter} = props;
  const todos = useSelector(selectTodos);
  const todoView = todos.map((item) => {
    if (filter === 'all' || (filter === 'active' && !item.done) || (filter === 'finished'  && item.done)) {
      return (
        <TodoItem 
          key={item.id} 
          id={item.id} 
          data={item.data} 
          done={item.done} 
          toggleFinished={(id) => dispatch(todoToggled(id))}
          handleItemEdited={(id, text) => dispatch(todoChanged({id, data:text, done:false}))}
          handleItemDeleted={(id) => dispatch(todoRemoved(id))}
        />
        )
    }
    return '';
  });

  const handleTodoTextChange = (event: React.ChangeEvent<HTMLInputElement>) => setTodoText(event.target.value);
  
  const addTodo = (data: string) => dispatch(todoAdded({data, id:0, done:false}))
  
  const handleTodoButtonClick = () => {
    if (todoText) {
      addTodo(todoText);
      setTodoText('');
    }
  }

  const onKeyUp = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleTodoButtonClick();
    }
  }

  return (
    <div>
      <div className={style.container}>
      <input value={todoText} onChange={handleTodoTextChange} onKeyUp={onKeyUp}/>
      <img className={style.addTodo} src={addTodoImage} onClick={handleTodoButtonClick} alt='Добавить'></img>
      </div>
      <ul className={style.ul}>
      {todoView}
      </ul>
    </div>
  )

}
