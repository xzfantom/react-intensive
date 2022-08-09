export enum UserActionTypes {
  LOGIN = "LOGIN",
  LOGOUT = "LOGOUT",
}

interface Login {
  type: UserActionTypes.LOGIN;
  payload: string;
}

interface Logout {
  type: UserActionTypes.LOGOUT;
}

export type UserActions = Login | Logout;

export enum TodoActionTypes {
  ADD_TODO = "ADD-TODO",
  DELETE_TODO = "DELETE-TODO",
  EDIT_TODO = "EDIT-TODO",
  TOGGLE_TODO = "TOGGLE-TODO",
}

interface AddTodo {
  type: TodoActionTypes.ADD_TODO;
  payload: string;
}

interface DeleteTodo {
  type: TodoActionTypes.DELETE_TODO;
  payload: number;
}

interface EditTodo {
  type: TodoActionTypes.EDIT_TODO;
  payload: {
    id: number;
    text: string;
  };
}

interface ToggleTodo {
  type: TodoActionTypes.TOGGLE_TODO;
  payload: number;
}

export type TodoActions = AddTodo | DeleteTodo | EditTodo | ToggleTodo;
