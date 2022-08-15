import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './todoSlice';
import usernameReducer from './usernameSlice';

export const store = configureStore({
  reducer: {
    todos: todoReducer,
    username: usernameReducer,
  },
});
