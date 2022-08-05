import TYPES from './todosTypes';

const addTodo = todo => ({
  type: TYPES.ADD,
  payload: todo,
});

//! Проверить
const editTodo = (todo) => ({
  type: TYPES.EDIT,
  payload: todo,
});

const removeTodo = id => ({
  type: TYPES.REMOVE,
  payload: id,
});

//! Проверить
const completeTodo = id => ({
  type: TYPES.COMPLETE,
  payload: id,
});

const addUser = userName => ({
  type: TYPES.USER,
  payload: userName,
});

export { addTodo, editTodo, removeTodo, completeTodo, addUser };