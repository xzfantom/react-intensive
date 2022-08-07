import { createSlice } from "@reduxjs/toolkit";

export let initialState = [];
const userNameSlice = createSlice({
  name: "userName",
  initialState,
  reducers: {
    addUsers(state, action) {
      state.push(action.payload);
      return state;
    },
  },
});

export const { addUsers } = userNameSlice.actions;

export const userNameReducer = userNameSlice.reducer;