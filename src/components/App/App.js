import Header from '../../components/Header/Header'
import AboutUsPage from '../../pages/AboutUsPage/AboutUsPage';
import s from './App.module.css';

const App = () => {
  return (
    <div className={s.wrap}>
      <Header />
      <AboutUsPage />
    </div>
  );
}

export default App;
