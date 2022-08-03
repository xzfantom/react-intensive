import React from 'react';
import Form from './Form';
import styles from './App.module.css';
import { validationRegExps, validationIsNotEmpty } from './helpers/validation';
import { errorsTextTemplate, emptyErrorText } from './helpers/errors';

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
    const regExp = new RegExp(validationRegExps[inputName]);
    if (validationIsNotEmpty.test(value)) {
      console.log('NOT EMPTY');

      if (regExp.test(value)) {
        console.log('regexps TRUE');
        return 'regexpsTrue';
      }
      console.log('regexps FALSE');
      return 'regexpsFalse';
    }
    console.log('!! EMPTY');
    return 'touchedEmpty';
  }
  onChange = (event) => {
    const inputName = event.target.name;
    const value = event.target.value;

    if (this.validate(value, inputName) === 'touchedEmpty') {
      this.setState((prevState) => ({
        errors: {
          ...prevState.errors,
          [inputName]: emptyErrorText,
        },
      }));
    }

    if (this.validate(value, inputName) === 'regexpsTrue') {
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
    }
    if (this.validate(value, inputName) === 'regexpsFalse') {
      this.setState((prevState) => ({
        errors: {
          ...prevState.errors,
          [inputName]: errorsTextTemplate[inputName],
        },
      }));
      console.log(this.state.errors);
    }
    return;
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
