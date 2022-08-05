import { FC } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Welcome from './components/Welcome/Welcome';
import ToDo from './components/ToDo/ToDo';

const App: FC = () => {
  return (
    <BrowserRouter>
      <div className="primaryBackground">
        <Routes>
          <Route path="/" element={<Welcome />}></Route>
          <Route path="/to-do" element={<ToDo />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
