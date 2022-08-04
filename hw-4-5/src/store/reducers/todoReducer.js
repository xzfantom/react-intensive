import { ADD_TODO, DELETE_TODO, EDIT_TODO, TOGGLE_TODO } from "../actionTypes";

const initialState = {
  todos: [],
};

const todoReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_TODO:
      return {
        todos: [
          ...state.todos,
          {
            id: Date.now(),
            isDone: false,
            text: payload,
          },
        ],
      };
    case DELETE_TODO:
      return {
        todos: state.todos.filter((todo) => todo.id !== payload),
      };
    case EDIT_TODO:
      return {
        todos: state.todos.map((todo) =>
          todo.id === payload.id ? { ...todo, text: payload.text } : todo
        ),
      };
    case TOGGLE_TODO:
      return {
        todos: state.todos.map((todo) =>
          todo.id === payload ? { ...todo, isDone: !todo.isDone } : todo
        ),
      };
    default:
      return state;
  }
};

export default todoReducer;
