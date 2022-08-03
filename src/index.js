import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Container from './components/common/Container/Container';
import App from './components/App/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Container>
      <App />
    </Container>
  </React.StrictMode>
);

