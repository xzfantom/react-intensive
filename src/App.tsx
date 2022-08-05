import { FC } from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Welcome from './components/Welcome/Welcome';
import ToDo from './components/ToDo/ToDo';
import User from './components/User/User';

// import styles from './App.module.css';

const App: FC = () => {
  return (
    <div>
      <User />
      <Welcome />
      <ToDo />
    </div>
  );

  // <BrowserRouter>
  //   <Routes>
  // /<Route path="/" element={<Welcome />} />
  // <Route path="/to-do" element={<ToDo />} />;
  //   </Routes>
  // </BrowserRouter>
};

export default App;
