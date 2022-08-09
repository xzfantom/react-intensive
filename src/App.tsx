import "./App.css";
import Header from "./containers/Header/Header";
import { Routes, Route, Navigate } from "react-router-dom";
import RegistrationPage from "./pages/RegistrationPage/RegistrationPage";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import ToDoListPage from "./pages/ToDoListPage/ToDoListPage";

const App: React.FC = () => {
  return (
    <div className="App">
      <header>
        <Header></Header>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Navigate to="/registration" />}></Route>
          <Route path="/registration" element={<RegistrationPage />}></Route>
          <Route path="/toDoList" element={<ToDoListPage />}></Route>
          <Route path="*" element={<ErrorPage />}></Route>
        </Routes>
      </main>
    </div>
  );
};

export default App;
