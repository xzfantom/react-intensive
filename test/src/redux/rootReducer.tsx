import { combineReducers } from "redux";
import { loginReducer } from './loginReducer';
import { todoReducer } from './todoReducer';

export const rootReducer = combineReducers({
  login: loginReducer,
  todo: todoReducer
})