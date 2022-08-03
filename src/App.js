import { useState } from 'react';
import styles from './App.module.css';
import Form from './components/Form/Form';
import UserProfile  from './components/UserProfile/UserProfile';

function App (){

  const [ person, setPerson ] = useState( {} );
  const [ isData, setIsData ] = useState( false );

  const onChange = ({ person, isData }) => {
    setPerson( person );
    setIsData( isData );
  };
  
  return(
    <div>
      <div className = { styles.background }>
          <Form 
            person = { person }
            isData = { isData }
            className = { (isData === true) ? styles.disable : styles.container }
            changeData = { onChange }
          /> 
          <UserProfile 
            person = { person }
            className = { (isData === true) ? styles.container : styles.disable }
          />
      </div>
    </div>
  )
}

export default App;
 