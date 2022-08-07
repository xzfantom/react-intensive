import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Todo {
  id: number;
  isCompleted: boolean;
  text: string;
}

interface State {
  todos: Record<number, Todo>;
  userName: string;
}

const initialState: State = {
  todos: {
    1: { id: 1, text: 'HOHOHO', isCompleted: false },
    2: { id: 2, text: 'WEFWEF', isCompleted: true },
    3: { id: 3, text: 'Completed', isCompleted: true },
  },
  userName: '',
};

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    changeUserName: (state, action: PayloadAction<string>) => {
      state.userName = action.payload;
    },

    addTodo: (state, action: PayloadAction<string>) => {
      const existingIdsAsNumbers = Object.keys(state.todos).map((key) => parseInt(key));
      const newTodoId = Math.max(...existingIdsAsNumbers) + 1;
      state.todos[newTodoId] = {
        id: newTodoId,
        isCompleted: false,
        text: action.payload,
      };
    },
    patchTodoText: (state, action: PayloadAction<{ id: number; text: string }>) => {
      const todoId = action.payload.id;
      state.todos[todoId].text = action.payload.text;
    },
    changeTaskStatus: (state, action: PayloadAction<number>) => {
      const todoId = action.payload;
      state.todos[todoId].isCompleted = !state.todos[todoId].isCompleted;
    },
    deleteTodo: (state, action: PayloadAction<number>) => {
      const todoId = action.payload;
      delete state.todos[todoId];
    },
  },
});

export const todoReducer = todoSlice.reducer;
export const { changeUserName, addTodo, patchTodoText, deleteTodo, changeTaskStatus } =
  todoSlice.actions;
