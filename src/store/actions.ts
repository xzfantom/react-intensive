import { ToDoItem } from '../types/toDoItemTypes';
import { ActionTypes } from '../types/reducerTypes';

export const setUser = (name: string) => {
  return {
    type: ActionTypes.SET_USER,
    payload: {
      name: name,
    },
  };
};

export const addTodo = (todo: ToDoItem) => {
  return {
    type: ActionTypes.ADD_TODO,
    payload: {
      todo: todo,
    },
  };
};

export const removeTodo = (id: number) => {
  return {
    type: ActionTypes.REMOVE_TODO,
    payload: {
      id: id,
    },
  };
};

export const updateTodo = (value: string, id: number) => {
  return {
    type: ActionTypes.UPDATE_TODO,
    payload: {
      newValue: value,
      id: id,
    },
  };
};

export const toggleCompletion = (id: number) => {
  return {
    type: ActionTypes.TOGGLE_COMPLETION,
    payload: {
      id: id,
    },
  };
};
