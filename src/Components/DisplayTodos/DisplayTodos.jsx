import React, { useState } from "react";
import { connect, useSelector } from "react-redux";
import {
  addTodos,
  completedTodos,
  removeTodos,
  updateTodos,
} from "../../store/toDoSlice";
import TodoItem from "../TodoItem/TodoItem";
import s from "./DisplayTodos.module.css";
import MyButton from "../MyButton/MyButton";
const mapStateToProps = (state) => {
  return {
    todos: state,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (obj) => dispatch(addTodos(obj)),
    removeTodo: (id) => dispatch(removeTodos(id)),
    updateTodo: (obj) => dispatch(updateTodos(obj)),
    completedTodo: (id) => dispatch(completedTodos(id)),
  };
};
const DisplayTodos = (props) => {
  const [sort, setSort] = useState("active");

  return (
    <div className="displayTodos">
      <div className={s.buttons}>
        <MyButton
          onClick={() => {
            setSort("active");
          }}
          className={s.button}
        >
          Active
        </MyButton>
        <MyButton
          onClick={() => {
            setSort("completed");
          }}
        >
          Completed
        </MyButton>
      </div>
      <ul>
        {props.todos.todos.length > 0 && sort === "active"
          ? props.todos.todos.map((item) => {
              return (
                item.completed === false && (
                  <TodoItem
                    key={item.id}
                    item={item}
                    removeTodo={props.removeTodo}
                    completedTodo={props.completedTodo}
                    updateTodo={props.updateTodo}
                  />
                )
              );
            })
          : null}
        {props.todos.todos.length > 0 && sort === "completed"
          ? props.todos.todos.map((item) => {
              return (
                item.completed === true && (
                  <TodoItem
                    key={item.id}
                    item={item}
                    removeTodo={props.removeTodo}
                    updateTodo={props.updateTodo}
                    completeTodo={props.completeTodo}
                  />
                )
              );
            })
          : null}
      </ul>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(DisplayTodos);