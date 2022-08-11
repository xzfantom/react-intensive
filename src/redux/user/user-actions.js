import { createAction } from "@reduxjs/toolkit";

const login = createAction("user/login", (name) => {
  return {
    payload: {
      name,
      isLoggedIn: true,
    },
  };
});

const actions = { login };

export default actions;
