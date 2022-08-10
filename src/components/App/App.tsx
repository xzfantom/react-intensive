import { Switch, Route } from 'react-router-dom'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import AboutUsPage from '../../pages/AboutUsPage/AboutUsPage'
import HomePage from '../../pages/HomePage/HomePage'
import LoginPage from '../../pages/LoginPage/LoginPage'
import NotFoundPage from '../../pages/NotFoundPage/NotFoundPage'

const App: React.FC = () => {
  return (
    <>
      <Header name={undefined} />
      <Switch>
        <Route exact path='/'>
          <AboutUsPage />
        </Route>

        <Route path='/todos'>
          <HomePage />
        </Route>

        <Route exact path='/login'>
          <LoginPage />
        </Route>

        <Route>
          <NotFoundPage />
        </Route>
      </Switch>
      <Footer />
    </>
  )
}

export default App
