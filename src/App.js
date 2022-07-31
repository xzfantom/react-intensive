import './App.css';
import { Component } from 'react';
import FormCard from './components/FormCard';

class App extends Component {
  render() {
    return (
      <div className='container'>
        <h1>Создание анкеты</h1>
        <FormCard />
      </div>
    );
  }
}

export default App;
