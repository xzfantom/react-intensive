import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const addTodoReducer = createSlice({
  name: "todos",
  initialState,
  reducers: {
    //Adding todos
    addTodos: (state, action) => {
      state.todos.push(action.payload);
      return state;
    },
    //remove todos
    removeTodos: (state, action) => {
      state.todos = state.todos.filter((item) => item.id !== action.payload);
    },
    //update todos
    updateTodos: (state, action) => {
      state.todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return {
            ...todo,
            item: action.payload.item,
          };
        }
        return todo;
      });
    },
    //completed todos
    completeTodos: (state, action) => {
      state.todos = state.todos.map((todo) => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            completed: true,
          };
        }
        return todo;
      });
    },
    //set user
    setUser: (state, action) => {
      state = action.payload;
      return state;
    },
  },
});

export const {
  addTodos,
  removeTodos,
  updateTodos,
  completeTodos,
  setUser
} = addTodoReducer.actions;
export const reducer = addTodoReducer.reducer;
