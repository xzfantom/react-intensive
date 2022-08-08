import React from "react";
import { useSelector } from "react-redux";
import s from "./TotalCompleteItems.module.css";
const TotalCompleteItems = () => {
  const completedTodos = useSelector((state) =>
    state.todos.filter((todo) => todo.completed === false)
  );
  return <h4>Total Active Items: {completedTodos.length}</h4>;
};

export default TotalCompleteItems;
