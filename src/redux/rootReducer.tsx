import { combineReducers } from "redux";
import { operationsReducer } from "./operations";

export const rootReducer = combineReducers({
    operationsReducer,
})