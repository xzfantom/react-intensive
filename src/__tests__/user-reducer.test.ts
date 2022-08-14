import userActions from "../redux/user/user-actions";
import userReducer from "../redux/user/user-reducer";

const testUser = {
  username: { name: "", isLoggedIn: false },
};

describe("test user reducer", () => {
  test("user login", () => {
    expect(
      userReducer(testUser, {
        type: userActions.login,
        payload: { name: "Test User", isLoggedIn: true },
      })
    ).toEqual({
      username: {
        name: "Test User",
        isLoggedIn: true,
      },
    });
  });
});
