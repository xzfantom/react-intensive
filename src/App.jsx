import React from 'react';
import Form from './Form';
import styles from './App.module.css';
import validation from './validation';
import errorsTextTemplate from './errors';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputs: { ...this.initialState },
      errors: { ...this.initialState },
    };
  }

  initialState = {
    name: '',
    family_name: '',
    date_of_birth: '',
    tel: '',
    web_site: '',
    about: '',
    skills: '',
    last_proj_description: '',
  };

  validate(value, inputName) {
    const regExp = new RegExp(validation[inputName]);

    if (regExp.test(value)) {
      console.log(true);
      return true;
    }
    return false;
  }
  onChange = (event) => {
    const inputName = event.target.name;
    const value = event.target.value;

    if (this.validate(value, inputName)) {
      this.setState((prevState) => ({
        ...prevState,
        inputs: {
          ...prevState.inputs,
          [inputName]: value,
        },
        errors: {
          ...this.initialState,
        },
      }));
    } else {
      this.setState((prevState) => ({
        ...prevState,
        inputs: {
          ...prevState.inputs,
          [inputName]: value,
        },
        errors: {
          ...prevState.errors,
          [inputName]: errorsTextTemplate[inputName],
        },
      }));
      console.log(this.state.errors);
    }
    console.log('from state>>' + this.state.inputs[inputName]);
  };

  handleFormReset = () => {
    this.setState(this.initialState);
  };
  handleSubmit = (event) => {
    event.preventDefault();
    event.target.reset();
    alert('submitted');
  };

  render() {
    return (
      <div>
        <div className={styles.headingWrapper}>
          <h1>Создание анкеты</h1>
        </div>
        <section>
          <Form
            handleSubmit={this.handleSubmit}
            handleFormReset={this.handleFormReset}
            onChange={this.onChange}
            state={this.state}
          />
        </section>
      </div>
    );
  }
}

export default App;
