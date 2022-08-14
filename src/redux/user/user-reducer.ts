import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";

interface IUserAction {
  type: string;
  payload: { name: string; isLoggedIn: boolean };
}

interface IUser {
  name: string;
  isLoggedIn: boolean;
}

const initialState: IUser = {
  name: "",
  isLoggedIn: false,
};

const username = createReducer(initialState, {
  "user/login": (state: {}, action: IUserAction) => action.payload,
});

export default combineReducers({ username });
