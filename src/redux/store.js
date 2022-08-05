import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './reducers';

const store = configureStore({
  reducer: {
    todoReducer,
  },
});

export default store;
