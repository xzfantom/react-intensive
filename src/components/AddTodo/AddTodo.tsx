import React, { ChangeEvent, useState } from 'react';
import Button from '../Button/Button';
import Input from '../Input/Input';
import styles from './AddTodo.module.css';
import { addTodo, Todo } from '../../redux/todoSlice';
import { useAppDispatch } from '../../redux/hooks';

const AddTodo = () => {
  const [ todoText, setTodoText ] = useState("");
  const dispatch = useAppDispatch();

    const submitTodo = () => {

      if (!todoText.trim()) {
        alert('Заполните поле ввода');
        return;
      }

      const newTodo: Todo = {
        id: Math.random(),
        title: todoText,
      };

      dispatch(addTodo(newTodo));

      setTodoText("");
    };

    const getTodoText = (event: ChangeEvent<HTMLInputElement>) => {
      setTodoText(event.target.value);
    };

  return (
    <section className={styles.section}>
      <div className={styles.wrapper}>
        <Input value={todoText}  type="text" placeholder="Введите задачу" onChange={getTodoText} className={styles.input} />
        <Button text="Добавить задачу" onClick={submitTodo} />
      </div>
    </section>
  );
};

export default AddTodo;