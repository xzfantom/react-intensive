import { combineReducers } from 'redux'
import TYPES from './todosTypes';

const itemsReducer = (state = [], action) => {

  switch (action.type) {
    case TYPES.ADD:
      return [...state, action.payload]

    case TYPES.EDIT:
      return state.map((item) => (item.id === action.payload.id ? action.payload : item))

    case TYPES.REMOVE:
      return state.filter((todo) => todo.id !== action.payload)

    case TYPES.COMPLETE:
      state.map((todo) => {
        if (todo.id === action.payload.id) {
          todo.isComplete = !todo.isComplete
        }
        return todo
      })
    // eslint-disable-next-line no-fallthrough
    default:
      return state
  }
}


const userReducer = (state = '', action) => {

  switch (action.type) {
    case TYPES.USER:
      return action.payload

    default:
      return state
  }

}


const todosReducer = combineReducers({
  items: itemsReducer,
  user: userReducer
})

export default todosReducer