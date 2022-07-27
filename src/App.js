import { Component } from 'react';
import styles       from './App.module.css';
import Form         from './components/Form';
import UserProfile  from './components/UserProfile';

class App extends Component{
  constructor( props ){
    super( props );
    this.state = { 
      person: {},
      isData: false
    }
  }

  onChange = ({ person, isData }) => {
    this.setState({ person: person, isData: isData})
  }
  
  render(){
    return(
      <div>
        <div className = { styles.background }>
            <Form 
              person      = { this.state.person } 
              isData      = { this.state.isData }
              className   = { (this.state.isData === true) ? styles.disable : styles.container }
              changeData  = { this.onChange }
            /> 
            <UserProfile 
              person    = { this.state.person } 
              className = { (this.state.isData === true) ? styles.container : styles.disable }
            />
        </div>
      </div>
    )
  }
}

export default App;
 