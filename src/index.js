import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Authentication from "./routes/Authentication";
import TodoList from "./routes/TodoList";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />}>
        <Route exact element={<TodoList />} />
        <Route path='login' element={<Authentication />} />
        <Route path='todoList' element={<TodoList />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
