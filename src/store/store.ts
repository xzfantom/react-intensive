import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers/index";

const store = createStore(reducers, applyMiddleware(thunk));

export type RootState = ReturnType<typeof reducers>;

export default store;
