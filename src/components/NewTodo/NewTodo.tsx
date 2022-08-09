import React, { useState } from "react";
import styles from "./NewTodo.module.css";
import Check from "../../assets/Check";
import useActions from "./../../store/hooks/useActions";

const NewTodo = () => {
  const [input, setInput] = useState("");
  const { addTodo } = useActions();

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const onClickHandler = () => {
    if (input.length) {
      addTodo(input);
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
