import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './redux/store'
import './index.css'
import Container from './components/common/Container/Container'
import App from './components/App/App'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Container>
        <Provider store={store}>
          <App />
        </Provider>
      </Container>
    </BrowserRouter>
  </React.StrictMode>
)
