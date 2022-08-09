import { createAction } from "@reduxjs/toolkit";

const addTodo = createAction("todos/add", (text) => {
  return {
    payload: { id: Math.random(), text, completed: false },
  };
});

const deleteTodo = createAction("todos/delete");
const toggleCompleted = createAction("todos/toggleCompleted");
const changeFilter = createAction("todos/changeFilter");
const editTodo = createAction("todos/editTodo");

const todoActions = {
  addTodo,
  deleteTodo,
  changeFilter,
  toggleCompleted,
  editTodo,
};
export default todoActions;
