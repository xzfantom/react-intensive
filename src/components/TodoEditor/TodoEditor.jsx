import React, { useState } from "react";
import { connect } from "react-redux";
import todosActions from "../../redux/todos/todos-actions";
import styles from "./TodoEditor.module.css";

const TodoEditor = ({ onSubmit, onSave }) => {
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setMessage(e.currentTarget.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim() !== "") {
      onSubmit(message);
      onSave();
      setMessage("");
      return;
    } else {
      alert("Todo cannot be empty");
    }
  };

  return (
    <form className={styles.todoEditor} onSubmit={handleSubmit}>
      <textarea
        className={styles.todoEditor__textarea}
        value={message}
        onChange={handleChange}
      ></textarea>
      <button type="submit" className={styles.todoEditor__button}>
        Save
      </button>
    </form>
  );
};

const mapDispatchToProps = (dispatch) => ({
  onSubmit: (text) => dispatch(todosActions.addTodo(text)),
});

export default connect(null, mapDispatchToProps)(TodoEditor);
