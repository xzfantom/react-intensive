import React from "react";
import Todo from "./../Todo/Todo";

const TodoBlock = ({ selectedTodos }) => {
  return (
    <>
      {selectedTodos.map((todo) => (
        <Todo todo={todo} key={todo.id} />
      ))}
      {!selectedTodos.length && "Нету выбранных задач"}
    </>
  );
};

export default TodoBlock;
