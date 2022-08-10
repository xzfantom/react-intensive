import { reducer } from "./reducer";
import { ActionTypes } from "../types/reducerTypes";

describe("reducer", () => {
  const initialState = { name: "", toDoList: [] };
  const currentState = {
    name: "Rick",
    toDoList: [
      { todo: "stand up", id: 1, completed: false },
      { todo: "take a shower", id: 2, completed: false },
    ],
  };

  it("should return default value", () => {
    expect(
      reducer(currentState, {
        type: "unknown type",
        payload: "any data",
      })
    ).toEqual(currentState);
  });

  it("should set user", () => {
    expect(
      reducer(initialState, {
        type: ActionTypes.SET_USER,
        payload: { name: "Rick" },
      })
    ).toEqual({ ...initialState, name: "Rick" });
  });

  it("should add todo", () => {
    expect(
      reducer(currentState, {
        type: ActionTypes.ADD_TODO,
        payload: {
          todo: { todo: "start working", id: 3, completed: false },
        },
      })
    ).toEqual({
      ...currentState,
      toDoList: [
        ...currentState.toDoList,
        { todo: "start working", id: 3, completed: false },
      ],
    });
  });

  it("should remove todo", () => {
    expect(
      reducer(currentState, {
        type: ActionTypes.REMOVE_TODO,
        payload: { id: 2 },
      })
    ).toEqual({
      ...currentState,
      toDoList: currentState.toDoList.filter((todo) => todo.id !== 2),
    });
  });

  it("should update todo", () => {
    expect(
      reducer(currentState, {
        type: ActionTypes.UPDATE_TODO,
        payload: { id: 1, newValue: "sit down" },
      })
    ).toEqual({
      ...currentState,
      toDoList: currentState.toDoList.map((todo) => {
        if (todo.id === 1) {
          todo.todo === "sit down";
        }
        return todo;
      }),
    });
  });

  it("should toggle todo completion", () => {
    expect(
      reducer(currentState, {
        type: ActionTypes.TOGGLE_COMPLETION,
        payload: { id: 2 },
      })
    ).toEqual({
      ...currentState,
      toDoList: currentState.toDoList.map((todo) => {
        if (todo.id === 2) {
          todo.completed = !todo.completed;
        }
        return todo;
      }),
    });
  });
});
