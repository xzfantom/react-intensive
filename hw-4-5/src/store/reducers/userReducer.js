import { LOGIN, LOGOUT } from "../actionTypes";

const initialState = {
  username: null,
  isLogin: false,
};

const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN:
      return {
        username: payload,
        isLogin: true,
      };
    case LOGOUT:
      return {
        username: null,
        isLogin: false,
      };
    default:
      return state;
  }
};

export default userReducer;
