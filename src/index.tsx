import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Authentication from "./routes/Authentication";
import TodoList from "./routes/TodoList";
import App from './App';
import './index.css';
import NotFound from './routes/NotFound';

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
      <Routes>
            <Route path='/' element={<App />}>
            <Route index element={<TodoList />} />
            <Route path='login' element={<Authentication />} />
            <Route path='todoList' element={<TodoList />} />
            <Route path='*' element={<NotFound />} />
          </Route>
          </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
