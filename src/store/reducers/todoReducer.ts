import { TodoActionTypes, TodoActions } from "../actionTypes";

export interface Todo {
  id: number;
  isDone: boolean;
  text: string;
}

interface TodoState {
  todos: Todo[];
}

const initialState: TodoState = {
  todos: [],
};

const todoReducer = (state = initialState, action: TodoActions): TodoState => {
  switch (action.type) {
    case TodoActionTypes.ADD_TODO:
      return {
        todos: [
          ...state.todos,
          {
            id: Date.now(),
            isDone: false,
            text: action.payload,
          },
        ],
      };
    case TodoActionTypes.DELETE_TODO:
      return {
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    case TodoActionTypes.EDIT_TODO:
      return {
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id
            ? { ...todo, text: action.payload.text }
            : todo
        ),
      };
    case TodoActionTypes.TOGGLE_TODO:
      return {
        todos: state.todos.map((todo) =>
          todo.id === action.payload ? { ...todo, isDone: !todo.isDone } : todo
        ),
      };
    default:
      return state;
  }
};

export default todoReducer;
