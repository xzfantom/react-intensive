import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../app/store'

export interface userState {
  userName: string,
  isLoggedIn: boolean,
}

const initialState:userState = {
  userName: '',
  isLoggedIn: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action:PayloadAction<string>) => {
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

export const selectUser = (state: RootState) => state.user.userName;
export const selectIsLoggedIn = (state: RootState) => state.user.isLoggedIn;

export default userSlice.reducer