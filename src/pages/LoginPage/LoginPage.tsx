import React from "react";
import { useState } from "react";
import styles from "./LoginPage.module.css";
import { useNavigate } from "react-router";
import useActions from "./../../store/hooks/useActions";

const LoginPage = () => {
  const { login } = useActions();
  const [input, setInput] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const onClickHandler = () => {
    if (input.length === 0) {
      setError("Поле не должно быть пустым");
      return;
    }
    login(input);
    navigate("/main");
  };

  return (
    <div className={styles.main}>
      <div className={styles.header}>Введите имя</div>
      <input
        type="text"
        placeholder="Ваше имя"
        value={input}
        onChange={onChangeHandler}/>
      <button onClick={onClickHandler}>Войти</button>
      <div>{error && "Поле не должно быть пустым"}</div>
    </div>
  );
};

export default LoginPage;
