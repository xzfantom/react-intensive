import { createReducer, createAction } from '@reduxjs/toolkit';

const initialState = {
  userName: '',
  todos: { id: { text: '', isCompleted: '' } },
};

const changeUserName = createAction('changeUserName');
// const addItem = createAction('addItem');
// const deleteItem = createAction('deleteItem');
// const markAsCompleted = createAction('markAsCompleted');

const todoReducer = createReducer(initialState, (builder) => {
  builder.addCase(changeUserName, (state, action) => (state.userName = action.payload));
  // .addCase(
  //   addItem,
  //   (state, action) =>
  //     (state.todos = {
  //       ...state.todos,
  //       [action.payload.id]: { text: action.payload.text, isCompleted: false },
  //     })
  // )
  // .addCase(
  //   markAsCompleted,
  //   (state, action) =>
  //     (state.todos = {
  //       ...state.todos,
  //       [action.payload.id]: { text: action.payload, isCompleted: true },
  //     })
  // )
  // .addCase(
  //   deleteItem,
  //   (state, action) =>
  //     (state.todos = { ...state.todos, [action.payload.id]: { text: '', isCompleted: '' } })
  // );
});

export default todoReducer;
