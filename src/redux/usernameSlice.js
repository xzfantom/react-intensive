import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	value: '',
};

export const usernameSlice = createSlice({
	name: 'username',
	initialState,
	reducers: {
		setUsername: (state, action) => {
			state.value = action.payload;
		},
	},
});

export const { setUsername } = usernameSlice.actions;
export const selectUsername = (state) => state.username.value
export default usernameSlice.reducer;
