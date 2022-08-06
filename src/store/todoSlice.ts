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
      const existingIdsAsNumbers = Object.keys(state.todos).map(parseInt);
      const newTodoId = Math.max(...existingIdsAsNumbers) + 1;
      state.todos[newTodoId] = {
        id: newTodoId,
        isCompleted: false,
        text: action.payload,
      };
    },
  },
});

export const todoReducer = todoSlice.reducer;
export const { changeUserName, addTodo } = todoSlice.actions;
