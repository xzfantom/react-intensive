import { FC } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/index';

import Welcome from './components/Welcome/Welcome';
import ToDo from './components/ToDo/ToDo';

// import styles from './App.module.css';

const App: FC = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/to-do" element={<ToDo />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
