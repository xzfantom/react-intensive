export const setUser = (name: string) => {
  return {
    type: "SET_USER",
    payload: {
      name: name,
    },
  };
};

export const addTodo = (todo: {}) => {
  return {
    type: "ADD_TODO",
    payload: {
      todo: todo,
    },
  };
};

export const removeTodo = (id: number) => {
  return {
    type: "REMOVE_TODO",
    payload: {
      id: id,
    },
  };
};

export const updateTodo = (value: string, id: number) => {
  return {
    type: "UPDATE_TODO",
    payload: {
      newValue: value,
      id: id,
    },
  };
};

export const toggleCompletion = (id: number) => {
  return {
    type: "TOGGLE_COMPLETION",
    payload: {
      id: id,
    },
  };
};
