import { createStore } from "redux";
import reducer from "./reducer";

const preloadedState = {};

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__
  ? window.__REDUX_DEVTOOLS_EXTENSION__()
  : (f) => f;

export const store = createStore(reducer, preloadedState, devTools);
