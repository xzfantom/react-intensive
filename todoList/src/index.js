import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter  } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, compose } from "redux";
import { rootReducer } from "./redux/rootReducer";

const store = createStore(rootReducer, compose(
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>  
  </React.StrictMode>
);

