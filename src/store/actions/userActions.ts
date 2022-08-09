import { Dispatch } from "redux";
import { UserActionTypes, UserActions } from "../actionTypes";

export const login =
  (username: string) => (dispatch: Dispatch<UserActions>) => {
    dispatch({
      type: UserActionTypes.LOGIN,
      payload: username,
    });
  };

export const logout = () => (dispatch: Dispatch<UserActions>) => {
  dispatch({
    type: UserActionTypes.LOGOUT,
  });
};
