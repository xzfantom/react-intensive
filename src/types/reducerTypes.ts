import { ToDoItem } from './toDoItemTypes';

export interface UserState {
  name: string;
  toDoList: ToDoItem[];
}

export enum ActionTypes {
  SET_USER = "SET_USER",
  ADD_TODO = "ADD_TODO",
  REMOVE_TODO = "REMOVE_TODO",
  UPDATE_TODO = "UPDATE_TODO",
  TOGGLE_COMPLETION = "TOGGLE_COMPLETION",
}

interface SetUserAction {
  type: ActionTypes.SET_USER;
  payload: {
    name: string;
  };
}

interface AddTodoAction {
  type: ActionTypes.ADD_TODO;
  payload: {
    todo: ToDoItem;
  };
}

interface RemoveTodoAction {
  type: ActionTypes.REMOVE_TODO;
  payload: {
    id: number;
  };
}

interface UpdateTodoAction {
  type: ActionTypes.UPDATE_TODO;
  payload: {
    id: number;
    newValue: string;
  };
}

interface ToggleCompletionAction {
  type: ActionTypes.TOGGLE_COMPLETION;
  payload: {
    id: number;
  };
}

export type Actions =
  | SetUserAction
  | AddTodoAction
  | RemoveTodoAction
  | UpdateTodoAction
  | ToggleCompletionAction;
