import React, { useState } from "react";
import { connect } from "react-redux";
import todosActions from "../../redux/todos/todos-actions";
import styles from "./TodoEditor.module.css";
import { AppDispatch } from "../../redux/store";

interface ITodoEditor {
  onSubmit: Function;
  onSave: Function;
}

const TodoEditor: React.FC<ITodoEditor> = ({ onSubmit, onSave }) => {
  const [message, setMessage] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.currentTarget.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
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

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  onSubmit: (text: string) => dispatch(todosActions.addTodo(text)),
});

export default connect(null, mapDispatchToProps)(TodoEditor);
