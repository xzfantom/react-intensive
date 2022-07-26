import React from 'react';
import style from './App.module.css';
import QuestionForm from './QuestionForm';

class App extends React.Component {

  render() {
    return (
      <div className={style.App}>
        <header className={style.AppHeader}>
          <h1>Создание анкеты</h1>
        </header>
        <QuestionForm />
      </div>
    );
  }
}

export default App;
