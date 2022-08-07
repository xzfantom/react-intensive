import React, { useRef } from "react";
import s from "./TodoItem.module.css";
import MyButton from "../MyButton/MyButton";
import Delete from "../../assets/icons/delete.png";
import Complete from "../../assets/icons/check .png";
import Edit from "../../assets/icons/edit.png";
const TodoItem = (props) => {
  const { item, updateTodo, removeTodo, completedTodo } = props;
  const inputRef = useRef(true);
  const changeFocus = () => {
    inputRef.current.disabled = false;
    inputRef.current.focus();
  };
  const update = (id, value, e) => {
    if (e.which === 13) {
      updateTodo({ id, item: value });
      inputRef.current.disabled = true;
    }
  };
  return (
    <li className={s.item} key={item.id}>
      {item.completed ? (
        <textarea
          className={s.line}
          ref={inputRef}
          disabled={inputRef}
          defaultValue={item.item}
          onKeyUp={(e) => {
            update(item.id, inputRef.current.value, e);
          }}
        />
      ) : (
        <textarea
          ref={inputRef}
          disabled={inputRef}
          defaultValue={item.item}
          onKeyUp={(e) => {
            update(item.id, inputRef.current.value, e);
          }}
        />
      )}

      <MyButton onClick={() => removeTodo(item.id)}>
        {" "}
        <img src={Delete} alt="#" />
      </MyButton>
      <MyButton onClick={() => completedTodo(item.id)}>
        {" "}
        <img src={Complete} alt="#" />
      </MyButton>

      <MyButton onClick={() => changeFocus()}>
        <img src={Edit} alt="#" />
      </MyButton>
    </li>
  );
};

export default TodoItem;