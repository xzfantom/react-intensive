import Header from '../../components/Header/Header'
import AboutUsPage from '../../pages/AboutUsPage/AboutUsPage';
import NotFoundPage from '../../pages/NotFoundPage/NotFoundPage';
import s from './App.module.css';

const App = () => {
  return (
    <div className={s.wrap}>
      <Header />
      <AboutUsPage />
      {/* <NotFoundPage /> */}
    </div>
  );
}

export default App;
