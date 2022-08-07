import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type TodoItem = {
  done: boolean,
  data: string,
}

interface TodoState {
  todos: Array<TodoItem>,
  activeCount: number,
}

const initialState: TodoState = {
  todos: [],
  activeCount: 0,
};

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    todoAdded(state, action: PayloadAction<TodoItem>) {
      state.todos.push(action.payload);
      state.activeCount += 1;
    }
  }
});

export const { todoAdded } = todoSlice.actions

export default todoSlice.reducer