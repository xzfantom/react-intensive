import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import actions from "./todos-actions";
import { TodoType } from "../../redux/types/todoType";

const items = createReducer([], {
  [actions.addTodo]: (
    state: [],
    action: { type: string; payload: TodoType }
  ) => [...state, action.payload],
  [actions.deleteTodo]: (
    state: [],
    action: { type: string; payload: number }
  ) => state.filter(({ id }) => id !== action.payload),
  [actions.toggleCompleted]: (
    state: [],
    action: { type: string; payload: number }
  ) =>
    state.map((todo: TodoType) =>
      todo.id === action.payload
        ? { ...todo, completed: !todo.completed }
        : todo
    ),
  [actions.editTodo]: (
    state: [],
    action: { type: string; payload: { id: number; message: string } }
  ) => {
    state.map((todo: TodoType) => {
      if (todo.id === action.payload.id) {
        todo.text = action.payload.message;
        return todo;
      }
      return todo;
    });
  },
});

const filter = createReducer("", {
  [actions.changeFilter]: (
    state: string,
    action: {
      type: string;
      payload: string;
    }
  ) => action.payload,
});

export default combineReducers({ items, filter });
