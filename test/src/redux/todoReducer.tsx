import {ADD_TODO, DELETE_TODO, EDIT_TODO, TOGGLE_TODO} from '../types';
import {ITodoItem} from '../interfaces'

interface ItodoInitial {
  todoList: Array<ITodoItem>
}

const initialState:ItodoInitial = {
  todoList: [],
}

export const todoReducer = (state = initialState, action: { type: any; payload: { id: string; title: string; isDone: boolean  }; }) => {
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
          if (item.id === action.payload.id) {
            return { ...item, isDone: !item.isDone }
          }
          return item
        })
      }
      case EDIT_TODO:
        return {
          ...state,
          todoList: state.todoList.map(item => {
            if (item.id === action.payload.id) {
              return {...item, title: action.payload.title}
            }
            return item
          })
        }
      case DELETE_TODO :
        return {
          ...state,
          todoList: state.todoList.filter(item => item.id !== action.payload.id) 
        }
    default:
      return state
  }
}