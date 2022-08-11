import React from 'react';
import NameComponent from './components/NameComponent/NameComponent';
import TodoList from './components/TodoList/TodoList';
import { Route, Routes } from 'react-router-dom';
 
function App() {
  return (
    <Routes>
      <Route path="/" element={<NameComponent/>}/>
      <Route path="/todos" element={<TodoList/>}/>
    </Routes>
  );
}

export default App;
