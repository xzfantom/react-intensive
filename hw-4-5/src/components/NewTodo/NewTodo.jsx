import React, { useState } from "react";
import styles from "./NewTodo.module.css";
import Check from "./../../assets/Check";
import { useDispatch } from "react-redux";
import { addTodo } from "./../../store/actions/todoActions";

const NewTodo = () => {
  const [input, setInput] = useState("");

  const dispatch = useDispatch();

  const onChangeHandler = (e) => {
    setInput(e.target.value);
  };

  const onClickHandler = () => {
    if (input.length) {
      dispatch(addTodo(input));
      setInput("");
    }
  };

  return (
    <>
      <div>Новая задача</div>
      <div className={styles.add}>
        <input
          type="text"
          placeholder="Поле не может быть пустым!"
          value={input}
          onChange={onChangeHandler}/>
        <div onClick={onClickHandler}>
          <Check />
        </div>
      </div>
    </>
  );
};

export default NewTodo;
