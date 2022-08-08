import {ADD_TODO, DELETE_TODO, TOGGLE_TODO} from './types';

const initialState = {
  todoList: [],
}

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todoList: [...state.todoList, action.payload]
      }
    case TOGGLE_TODO:
      return {
        ...state,
        todoList: state.todoList.map(item => {
          if (item.id === action.payload) {
            return { ...item, isDone: !item.isDone }
          }
          return item
        })
      }
      case DELETE_TODO :
        return {
          ...state,
          todoList: state.todoList.filter(item => item.id !== action.payload) 
        }
    default:
      return state
  }
}