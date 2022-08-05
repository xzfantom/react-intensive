import React from "react";
import { useSelector } from "react-redux";
import style from "./header.module.css";

const Header = () => {
  const user = useSelector((state) => state);

  const thingsToDo = () => {
    const toDo = user.toDoList.filter((todo) => todo.completed === false);
    return toDo.length;
  };

  return (
    <div className={style.container}>
      <div className={style.content}>
        {user.name ? (
          <div className={style.wrapper}>
            <div className={style.userMessage}>Hello {user.name}!</div>
            <div className={style.activeToDoItems}>
              You have {thingsToDo()} things to do
            </div>
          </div>
        ) : (
          <div className={style.noUserMessage}>Hello friend!</div>
        )}
      </div>
    </div>
  );
};

export default Header;
