import { Switch, Route } from 'react-router-dom';
import Header from '../../components/Header/Header'
import AboutUsPage from '../../pages/AboutUsPage/AboutUsPage';
import HomePage from '../../pages/HomePage/HomePage';
import NotFoundPage from '../../pages/NotFoundPage/NotFoundPage';

const App = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path='/'>
          <AboutUsPage />
        </Route>

        <Route path='/todos'>
          <HomePage />
        </Route>

        {/* <Route exact path='/login'>
          <AuthPage />
        </Route> */}
        <Route>
          <NotFoundPage />
        </Route>
      </Switch>
    </>
  );
}

export default App;
