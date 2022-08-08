const reducer = (state = {}, action) => {
  switch (action.type) {
    case "SET_USER": {
      return { name: action.payload.name, toDoList: [] };
    }

    case "ADD_TODO": {
      return { ...state, toDoList: [...state.toDoList, action.payload.todo] };
    }

    case "REMOVE_TODO": {
      const newToDoList = state.toDoList.filter(
        (todo) => todo.id !== action.payload.id
      );
      return { ...state, toDoList: newToDoList };
    }

    case "UPDATE_TODO": {
      const newToDoList = state.toDoList.map((todo) => {
        if (todo.id === action.payload.id) {
          todo.todo = action.payload.newValue;
        }
        return todo;
      });
      return { ...state, toDoList: newToDoList };
    }

    case "TOGGLE_COMPLETION": {
      const newToDoList = state.toDoList.map((todo) => {
        if (todo.id === action.payload.id) {
          todo.completed = !todo.completed;
        }
        return todo;
      });
      return { ...state, toDoList: newToDoList };
    }

    default: {
      return state;
    }
  }
};

export default reducer;
