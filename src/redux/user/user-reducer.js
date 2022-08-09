import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";

const username = createReducer("", {
  "user/login": (state, action) => action.payload,
});

export default combineReducers({ username });
