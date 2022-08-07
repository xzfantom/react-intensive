import { createSlice } from "@reduxjs/toolkit";

export let initialState = false;

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logIn() {
      return (initialState = true);
    },
    logOut(state) {
      return (state = false);
    },
  },
});

export const { logIn, logOut } = userSlice.actions;
export const userReducer = userSlice.reducer;
