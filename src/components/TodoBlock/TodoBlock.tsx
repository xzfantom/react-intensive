import React from "react";
import { Todo as TodoType } from "../../store/reducers/todoReducer";
import Todo from "../Todo/Todo";

interface TodoBlockProps {
  selectedTodos: TodoType[];
}

const TodoBlock: React.FC<TodoBlockProps> = ({ selectedTodos }) => {
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
