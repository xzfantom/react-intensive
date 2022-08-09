import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "./todos/todos-reducer";
import userReducer from "./user/user-reducer";

const store = configureStore({
  reducer: {
    todos: todosReducer,
    user: userReducer,
  },
  devTools: process.env.NODE_ENV === "development",
});

export default store;
