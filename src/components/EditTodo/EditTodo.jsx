import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styles from './EditTodo.module.css';
import { editTodo } from '../../redux/todoSlice';

const EditTodo = ({ id, title, onClose }) => {
  const [todoText, setTodoText] = useState(title);
  const dispatch = useDispatch();

  const save = () => {
    if (!todoText.trim()) {
      alert('Введите текст задачи');
      return;
    }

    dispatch(editTodo({ id, title: todoText }));
    setTodoText("");
    onClose();
  }

  const getTodoText = (event) => {
    setTodoText(event.target.value);
  }

  return (
      <div className={styles.todo}>
        <input value={todoText} type="text" placeholder="Введите задачу" onChange={getTodoText} />
        <div className={styles.btnWrapper}>
          <button className={styles.btn} onClick={save}>Сохранить</button>
          <button className={styles.btn} onClick={onClose}>Отменить</button>
        </div>
      </div>
  )
}

export default EditTodo;