import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import styles from "./LoginPage.module.css";
import { login } from "../../store/actions/userActions";
import { useNavigate } from "react-router";

const LoginPage = () => {
  const [input, setInput] = useState("");
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onChangeHandler = (e) => {
    setInput(e.target.value);
  };

  const onClickHandler = () => {
    if (input.length === 0) {
      setError("Поле не должно быть пустым");
      return;
    }
    dispatch(login(input));
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
