import React, { useState } from "react";
import styles from "./Todo.module.css";
import Edit from "../../assets/Edit";
import Delete from "../../assets/Delete";
import Check from "./../../assets/Check";
import { useDispatch } from "react-redux";
import {
  editTodo,
  deleteTodo,
  toggleTodo,
} from "./../../store/actions/todoActions";
import Undo from "../../assets/Undo";

const Todo = ({ todo: { text, isDone, id } }) => {
  const [isEdit, setIsEdit] = useState(false);
  const dispatch = useDispatch();

  const toggleIsEdit = () => {
    setIsEdit(!isEdit);
  };

  const [input, setInput] = useState(text);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const onSave = () => {
    if (input.length !== 0) {
      dispatch(editTodo(id, input));
      setIsEdit(false);
    }
  };

  const onDelete = () => {
    dispatch(deleteTodo(id));
  };

  const onToggle = () => {
    dispatch(toggleTodo(id));
  };

  return (
    <div className={styles.main}>
      {isEdit 
      ? 
      <>
        <input
          placeholder="Поле не может быть пустым!"
          value={input}
          onChange={handleInputChange}/>
        <div className={styles.button} onClick={onSave}>
          <Check />
        </div>
      </>
      : 
      <>
        <div className={`${styles.text} ${isDone && styles.crossed}`}>
          {text}
        </div>
        <div className={styles.button} onClick={onToggle}>
          {isDone ? <Undo /> : <Check />}
        </div>
        <div className={styles.button} onClick={toggleIsEdit}>
          <Edit />
        </div>
        <div className={styles.button} onClick={onDelete}>
          <Delete />
        </div>
      </>
      }
    </div>
  );
};

export default Todo;
