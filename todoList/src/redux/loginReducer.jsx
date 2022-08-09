import {LOGIN_NAME} from './types'

const initialState = {
  name: '',
}

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_NAME:
      return {
        ...state,
        name: action.payload,
      }
    default:
      return state
  }
}