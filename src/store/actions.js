export const setUser = (name) => {
  return {
    type: "SET_USER",
    payload: {
      name: name,
    },
  };
};

export const addTodo = (todo) => {
  return {
    type: "ADD_TODO",
    payload: {
      todo: todo,
    },
  };
};

export const removeTodo = (id) => {
  return {
    type: "REMOVE_TODO",
    payload: {
      id: id,
    },
  };
};

export const updateTodo = (value, id) => {
  return {
    type: "UPDATE_TODO",
    payload: {
      newValue: value,
      id: id,
    },
  };
};

export const toggleCompletion = (id) => {
  return {
    type: "TOGGLE_COMPLETION",
    payload: {
      id: id,
    },
  };
};
