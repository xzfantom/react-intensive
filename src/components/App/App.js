import Header from '../../components/Header/Header'
import AboutUsPage from '../../pages/AboutUsPage/AboutUsPage';
import HomePage from '../../pages/HomePage/HomePage';
import NotFoundPage from '../../pages/NotFoundPage/NotFoundPage';
import s from './App.module.css';

const App = () => {
  return (
    <div className={s.wrap}>
      <Header />
      <HomePage />
      {/* <AboutUsPage /> */}
      {/* <NotFoundPage /> */}
    </div>
  );
}

export default App;
