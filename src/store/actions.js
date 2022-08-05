export const updateUser = (updatedUser) => {
  return {
    type: "UPDATE_USER",
    payload: updatedUser,
  };
};
