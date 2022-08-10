import { LOGIN_NAME, ADD_TODO, TOGGLE_TODO, DELETE_TODO, EDIT_TODO } from "../types";
import { ITodoItem } from "../interfaces";

export function loginName(name:string) {
  return {
    type: LOGIN_NAME,
    payload: name,
  }
}

export function addTodo(todo: {title: string, id: string, isDone: boolean}) {
  return {
    type: ADD_TODO,
    payload: todo,
  }
}

export function toggleTodo(id:string) {
  return {
    type: TOGGLE_TODO,
    payload: {id: id},
  }
}

export function deleteTodo(id:string) {
  return {
    type: DELETE_TODO,
    payload: {id: id},
  }
}

export function editTodo(updatedTodo:{title: string, id: string}) {
  return {
    type: EDIT_TODO,
    payload: updatedTodo
  }
}