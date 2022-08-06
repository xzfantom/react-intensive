import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type TodoItem = {
  done: boolean,
  data: string,
}

interface TodoState {
  todos: Array<TodoItem>
}


const initialState: TodoState = {
  todos: [],
};

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    todoAdded(state, action: PayloadAction<string>) {
      const todo:TodoItem = {
        done: false,
        data: action.payload,
      };
      state.todos.push(todo);
    }
  }
});

export const { todoAdded } = todoSlice.actions

export default todoSlice.reducer