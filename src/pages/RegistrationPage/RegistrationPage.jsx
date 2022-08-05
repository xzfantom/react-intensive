import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import style from "./registrationPage.module.css";
import { updateUser } from "../../store/actions";
import Button from "../../components/Button/Button";

const RegistrationPage = () => {
  const [userName, setUserName] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmitClick = (e) => {
    e.preventDefault();

    if (userName.trim() !== "") {
      setError(false);
      dispatch(updateUser({ name: userName, toDoList: [] }));
      navigate("/toDoList", { replace: true });
    } else {
      setError(true);
    }
  };

  const handleEnterPress = (e) => {
    if (e.key === "Enter") {
      handleSubmitClick(e);
    }
  };

  const handleChange = (e) => {
    setUserName(e.target.value);
  };

  return (
    <div className={style.container}>
      <div className={style.content}>
        <form className={style.form}>
          <label className={style.label} htmlFor="regInput">
            Enter your name
          </label>
          <input
            className={style.input}
            id="regInput"
            placeholder="Name"
            type="text"
            value={userName}
            onChange={handleChange}
            onKeyDown={handleEnterPress}
          />
          {error && (
            <div className={style.error}>This field can't be empty</div>
          )}
        </form>
        <div className={style.button}>
          <Button className={style.button} handleClick={handleSubmitClick}>
            Save
          </Button>
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;
