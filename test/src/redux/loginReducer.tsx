import {LOGIN_NAME} from '../types'

interface ILoginInitial {
  name: string
}

const initialState:ILoginInitial = {
  name: '',
}

export const loginReducer = (state = initialState, action: { type: string; payload: string }) => {
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