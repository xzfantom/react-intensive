import { LOGIN_NAME, ADD_TODO, TOGGLE_TODO, DELETE_TODO, EDIT_TODO } from "./types";

export function loginName(name) {
  return {
    type: LOGIN_NAME,
    payload: name,
  }
}

export function addTodo(todo) {
  return {
    type: ADD_TODO,
    payload: todo,
  }
}

export function toggleTodo(id) {
  return {
    type: TOGGLE_TODO,
    payload: id,
  }
}

export function deleteTodo(id) {
  return {
    type: DELETE_TODO,
    payload: id,
  }
}

export function editTodo(updatedTodo) {
  return {
    type: EDIT_TODO,
    payload: updatedTodo
  }
}