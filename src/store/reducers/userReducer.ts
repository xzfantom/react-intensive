import { UserActions, UserActionTypes } from "../actionTypes";

interface UserState {
  username: null | string;
  isLogin: boolean;
}

const initialState: UserState = {
  username: null,
  isLogin: false,
};

const userReducer = (state = initialState, action: UserActions): UserState => {
  switch (action.type) {
    case UserActionTypes.LOGIN:
      return {
        username: action.payload,
        isLogin: true,
      };
    case UserActionTypes.LOGOUT:
      return {
        username: null,
        isLogin: false,
      };
    default:
      return state;
  }
};

export default userReducer;
