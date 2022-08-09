import { UserState, ActionTypes, Actions } from "../types/reducerTypes";

const initialState: UserState = {
  name: "",
  toDoList: [],
};

export const reducer = (state = initialState, action: Actions): UserState => {
  switch (action.type) {
    case ActionTypes.SET_USER: {
      return { ...state, name: action.payload.name };
    }

    case ActionTypes.ADD_TODO: {
      return { ...state, toDoList: [...state.toDoList, action.payload.todo] };
    }

    case ActionTypes.REMOVE_TODO: {
      const newToDoList = state.toDoList.filter(
        (todo) => todo.id !== action.payload.id
      );
      return { ...state, toDoList: newToDoList };
    }

    case ActionTypes.UPDATE_TODO: {
      const newToDoList = state.toDoList.map((todo) => {
        if (todo.id === action.payload.id) {
          todo.todo = action.payload.newValue;
        }
        return todo;
      });
      return { ...state, toDoList: newToDoList };
    }

    case ActionTypes.TOGGLE_COMPLETION: {
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
