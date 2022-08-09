import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	todos: [],
};

export const todoSlice = createSlice({
	name: "todos",
	initialState,
	reducers: {
		addTodo: (state, action) => {
			state.todos.push(action.payload);
		},
		deleteTodo: (state, action) => {
			state.todos = state.todos.filter((todo) => todo.id !== action.payload);
		},
		editTodo: (state, action) => {
			state.todos = state.todos.map((todo) =>
			 todo.id === action.payload.id
			  ? { ...todo, title: action.payload.title }
			  : todo
			);
		}
	},
});

export const { addTodo, deleteTodo, editTodo } = todoSlice.actions;
export const getTodos = (state) => state.todos.todos;
export default todoSlice.reducer;
