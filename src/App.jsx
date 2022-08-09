import React, {useState} from 'react';
import styles from './components/style.module.css';
import Form from './components/Form';
import ResultForm from './components/ResultForm';

function App() {
  const [inputState, setInputState] = useState();

  const onSave = function(form) {
    setInputState(form);
  }

  return (
    <div className={styles.formWrapper}>
      {inputState ? <ResultForm result={inputState} /> : <Form onSave={(form) => onSave(form)}/>}
    </div>
  )
}

export default App;
