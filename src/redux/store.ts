import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './todoSlice';
import usernameReducer from './usernameSlice';

export const store = configureStore({
  reducer: {
    todos: todoReducer,
    username: usernameReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch