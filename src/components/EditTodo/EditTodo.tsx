import React, { ChangeEvent, useState } from 'react';
import styles from './EditTodo.module.css';
import { editTodo } from '../../redux/todoSlice';
import { useAppDispatch } from '../../redux/hooks';
import Input from '../Input/Input';

interface EditTodoProps {
  id: number;
  title: string;
  onClose: () => void;
}

const EditTodo = ({ id, title, onClose }: EditTodoProps) => {
  const [todoText, setTodoText] = useState(title);
  const dispatch = useAppDispatch();

  const save = () => {
    if (!todoText.trim()) {
      alert('Введите текст задачи');
      return;
    }

    dispatch(editTodo({ id, title: todoText }));
    setTodoText("");
    onClose();
  }

  const getTodoText = (event: ChangeEvent<HTMLInputElement>) => {
    setTodoText(event.target.value);
  }

  return (
    <div className={styles.todo}>
      <Input value={todoText} type="text" placeholder="Введите задачу" onChange={getTodoText} className={styles.editInput} />
      <div className={styles.btnWrapper}>
        <button className={styles.btn} onClick={save}>Сохранить</button>
        <button className={styles.btn} onClick={onClose}>Отменить</button>
      </div>
    </div>
  )
}

export default EditTodo;