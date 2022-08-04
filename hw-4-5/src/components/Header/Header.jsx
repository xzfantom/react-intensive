import React from "react";
import styles from "./Header.module.css";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../store/actions/userActions";

const Header = () => {
  const { todos } = useSelector((state) => state.todo);
  const dispatch = useDispatch();
  const { username } = useSelector((state) => state.user);

  const onLogout = () => {
    dispatch(logout());
  };

  const calculateActiveTodos = (todos) =>
    todos.reduce((prev, curr) => prev + !curr.isDone, 0);
    
  return (
    <div className={styles.header}>
      <div>
        Пользователь: {username}
        <br />
        Активных задач: {calculateActiveTodos(todos)}
      </div>
      <div onClick={onLogout} className={styles.btn}>
        Выйти
      </div>
    </div>
  );
};

export default Header;
