import React, { useState } from "react";
import { connect } from "react-redux";
import s from "./InputField.module.css";
import { addTodos } from "../../store/toDoSlice";
import MyButton from "../MyButton/MyButton";

const mapStateToProps = (state) => {
  return {
    todos: state,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (obj) => dispatch(addTodos(obj)),
  };
};
const InputField = (props) => {
  const [todo, setTodo] = useState("");
  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const add = () => {
    if (todo === "") {
      alert("Input is Empty");
    } else {
      props.addTodo({
        id: Math.floor(Math.random() * 1000),
        item: todo,
        completed: false,
      });
      setTodo("");
    }
  };
  return (
    <>
      <label className={s.flex}>
        <input type="text" value={todo} onChange={(e) => handleChange(e)} />
        <MyButton onClick={() => add()}> add Todo </MyButton>
      </label>
    </>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(InputField);