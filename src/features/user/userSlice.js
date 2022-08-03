import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  userName: '',
  isLoggedIn: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action) => {
      state.userName = action.payload;
      state.isLoggedIn = true;
    },
    logout: (state) => {
      state.userName = '';
      state.isLoggedIn = false;
    }
  }
});

export const { login, logout } = userSlice.actions;

export const selectUser = (state) => state.user.userName;
export const selectIsLoggedIn = (state) => state.user.isLoggedIn;

export default userSlice.reducer