import React from "react";
import { connect } from "react-redux";
import Todo from "../Todo";
import todosActions from "../../redux/todos/todos-actions";
import styles from "./TodoList.module.css";

const TodoList = ({ todos, onDeleteTodo, onToggleCompleted, onEditTodo }) => {
  return (
    <ul className={styles.TodoList}>
      {todos.map(({ id, text, completed }) => {
        let style = "";
        if (completed) {
          style = "--completed";
        }
        return (
          <li
            key={id}
            className={`${styles.TodoList__item} ${styles.TodoList__item}${style}`}
          >
            <Todo
              text={text}
              completed={completed}
              id={id}
              onToggleCompleted={() => onToggleCompleted(id)}
              onDelete={() => onDeleteTodo(id)}
              onEdit={() => onEditTodo(id)}
            />
          </li>
        );
      })}
    </ul>
  );
};

const getVisibleTodos = (allTodos, filter) => {
  switch (filter) {
    case "incomplete":
      return allTodos.filter((todo) => !todo.completed);
    case "complete":
      return allTodos.filter((todo) => todo.completed);
    default:
      return allTodos;
  }
};

const mapStateToProps = ({ todos: { items, filter } }) => ({
  todos: getVisibleTodos(items, filter),
});

const mapDispatchToProps = (dispatch) => ({
  onDeleteTodo: (id) => dispatch(todosActions.deleteTodo(id)),
  onToggleCompleted: (id) => dispatch(todosActions.toggleCompleted(id)),
  onEditTodo: (id) => dispatch(todosActions.editTodo(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
