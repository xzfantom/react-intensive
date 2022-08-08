import './App.css';
import {Routes, Route, Navigate} from 'react-router-dom'
import Header from './components/Header/Header';
import LoginPage from './pages/LoginPage/LoginPage'
import TodoListPage from './pages/TodoListPage/TodoListPage';
import ErrorPage from './pages/ErrorPage/ErrorPage';

function App() {
  return (
    <div className="App">
       <Header />

       {/* <TodoListPage /> */}

      <Routes>
        <Route path='/' element={<Navigate to='/login_page' />} />
        <Route path='/login_page' element={<LoginPage />} />
        <Route path='/todo_list'>
          <Route index element={<TodoListPage />} />
        </Route>
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
