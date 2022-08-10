import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../app/store';

const RANDOM_MAX = 10000;

type TodoItem = {
  id: number,
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
      const newTodo:TodoItem = {...action.payload};
      newTodo.id = Math.floor(Math.random() * RANDOM_MAX);
      state.todos.push(newTodo);
      state.activeCount += 1;
    },
    todoToggled(state, action: PayloadAction<number>) {
      for (const item of state.todos){ 
        if (item.id === action.payload) {
          state.activeCount += item.done ? 1 : -1;
          item.done = !item.done;  
          break;        
        }
      }
    },
    todoChanged(state, action: PayloadAction<TodoItem>) {
      for (const item of state.todos){ 
        if (item.id === action.payload.id) {
          item.data = action.payload.data;  
          break;        
        }
      }
    },
    todoRemoved(state, action: PayloadAction<number>) {
      state.todos = state.todos.filter((item) => item.id !== action.payload);
      state.activeCount -= 1;
    }
  }
});

export const { todoAdded, todoToggled, todoChanged, todoRemoved } = todoSlice.actions

export const selectTodos = (state: RootState) => state.todo.todos;
export const selectActiveTodoCount = (state: RootState) => state.todo.activeCount;

export default todoSlice.reducer