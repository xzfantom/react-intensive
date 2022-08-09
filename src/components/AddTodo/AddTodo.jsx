import React, { useState } from 'react';
import Button from '../Button/Button';
import Input from '../Input/Input';
import styles from './AddTodo.module.css';
import { addTodo } from '../../redux/todoSlice';
import { useDispatch } from 'react-redux';

const AddTodo = () => {
  const [ todoText, setTodoText ] = useState("");
  const dispatch = useDispatch();

    const submitTodo = (e) => {
      e.preventDefault();

      if (!todoText.trim()) {
        alert('Заполните поле ввода');
        return;
      }

      const newTodo = {
        id: Math.random(),
        title: todoText,
      }

      dispatch(addTodo(newTodo))

      setTodoText("");
    }

    const getTodoText = (event) => {
      setTodoText(event.target.value);
    }

  return (
    <section className={styles.section}>
      <div className={styles.wrapper}>
        <Input value={todoText}  type="text" placeholder="Введите задачу" onChange={getTodoText} />
        <Button text="Добавить задачу" onClick={submitTodo} />
      </div>
    </section>
  )
}

export default AddTodo