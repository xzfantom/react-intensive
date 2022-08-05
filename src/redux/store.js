import { createStore, combineReducers } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import todosReducer from "./todos/todosReducer";

const rootReducer = combineReducers({
  todos: todosReducer
})

const store = createStore(rootReducer, devToolsEnhancer())

export default store