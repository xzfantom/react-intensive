import { combineReducers } from "redux";
import todoReducer from "./todoReducer";
import userReducer from "./userReducer";

const reducers = combineReducers({
  todo: todoReducer,
  user: userReducer,
});

export default reducers;
