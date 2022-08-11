import { RootState } from './store';
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Todo {
	id: number;
	title: string;
}

export interface TodoState {
	todos: Todo[];
}

const initialState: TodoState = {
	todos: [],
};

export const todoSlice = createSlice({
	name: "todos",
	initialState,
	reducers: {
		addTodo: (state, action: PayloadAction<Todo>) => {
			state.todos.push(action.payload);
		},
		deleteTodo: (state, action: PayloadAction<number>) => {
			state.todos = state.todos.filter((todo) => todo.id !== action.payload);
		},
		editTodo: (state, action: PayloadAction<Todo>) => {
			state.todos = state.todos.map((todo) =>
			 todo.id === action.payload.id
			  ? { ...todo, title: action.payload.title }
			  : todo
			);
		}
	},
});

export const { addTodo, deleteTodo, editTodo } = todoSlice.actions;
export const getTodos = (state: RootState) => state.todos.todos;
export default todoSlice.reducer;

