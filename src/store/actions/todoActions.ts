import { Dispatch } from "redux";
import { TodoActionTypes, TodoActions } from "../actionTypes";

export const addTodo = (text: string) => (dispatch: Dispatch<TodoActions>) => {
  dispatch({
    type: TodoActionTypes.ADD_TODO,
    payload: text,
  });
};

export const deleteTodo = (id: number) => (dispatch: Dispatch<TodoActions>) => {
  dispatch({
    type: TodoActionTypes.DELETE_TODO,
    payload: id,
  });
};

export const editTodo =
  (id: number, text: string) => (dispatch: Dispatch<TodoActions>) => {
    dispatch({
      type: TodoActionTypes.EDIT_TODO,
      payload: { id, text },
    });
  };

export const toggleTodo = (id: number) => (dispatch: Dispatch<TodoActions>) => {
  dispatch({
    type: TodoActionTypes.TOGGLE_TODO,
    payload: id,
  });
};
