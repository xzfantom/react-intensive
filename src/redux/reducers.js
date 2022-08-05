import { createAction, createReducer } from '@reduxjs/toolkit';

const initialState = {
  userName: 'Sasha',
};

export const changeUserName = createAction('changeUserName');

//includes immer by default so that we can 'mutate' state here

const todoReducer = createReducer(initialState, (builder) => {
  builder.addCase(changeUserName, (state, action) => {
    state.userName = action.payload;
  });
  // .addCase(
  //   addItem,
  //   (state, action) =>
  //     (state.todos = {
  //       ...state.todos,
  //       [action.payload.id]: { text: action.payload.text, isCompleted: false },
  //     })
  // );
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
