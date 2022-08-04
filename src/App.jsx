import React from 'react';
import Form from './Form';
import Profile from './Profile';
import styles from './App.module.css';
import { validationRegExps, validationIsNotEmpty } from './helpers/validation';
import { errorsTextTemplate, emptyErrorText } from './helpers/errors';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputs: { ...this.initialState },
      errors: { ...this.initialState },
      isProfileShown: false,
    };
  }

  initialState = {
    firstName: '',
    lastName: '',
    date_of_birth: '',
    telephone: '',
    web_site: '',
    about: '',
    skills: '',
    last_project_description: '',
  };

  validateIsNotEmpty(value) {
    if (validationIsNotEmpty.test(value)) {
      return true;
    }
    return false;
  }

  validateIsValid(value, inputName) {
    const regExp = new RegExp(validationRegExps[inputName]);
    if (regExp.test(value)) {
      return true;
    }
    return false;
  }

  applyMask(value, mask) {
    const result = [];
    for (let i = 0; i < value.length; i++) {
      if (i >= mask.length) break;
      result[i] = (typeof mask[i] === 'string' ? mask[i] : '') + value[i].replace(mask[i], '');
    }
    let maskedValue = result.join('');
    return maskedValue;
  }

  onChange = (event) => {
    const inputName = event.target.name;
    let value = event.target.value;

    if (this.validateIsNotEmpty(value.trim()) === false) {
      this.setState((prevState) => ({
        ...prevState,
        inputs: {
          ...prevState.inputs,
          [inputName]: value,
        },
        errors: {
          ...prevState.errors,
          [inputName]: '',
        },
      }));
      return;
    }

    if (this.validateIsValid(value.trim(), inputName)) {
      this.setState((prevState) => ({
        ...prevState,
        inputs: {
          ...prevState.inputs,
          [inputName]: value,
        },
        errors: {
          ...prevState.errors,
          [inputName]: '',
        },
      }));
    }
    if (this.validateIsValid(value.trim(), inputName) === false) {
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
    }

    if (inputName === 'telephone') {
      const telephoneNumberMask = [
        /\D/,
        '-',
        /\D/,
        /\D/,
        /\D/,
        /\D/,
        '-',
        /\D/,
        /\D/,
        '-',
        /\D/,
        /\D/,
      ];

      value = this.applyMask(value, telephoneNumberMask);
      this.setState((prevState) => ({
        ...prevState,
        inputs: {
          ...prevState.inputs,
          [inputName]: value,
        },
      }));
    }

    if (this.validateIsValid(value.trim(), inputName)) {
      this.setState((prevState) => ({
        ...prevState,
        inputs: {
          ...prevState.inputs,
          [inputName]: value,
        },
        errors: {
          ...prevState.errors,
          [inputName]: '',
        },
      }));
    }

    if (this.validateIsValid(value.trim(), inputName) === false) {
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
    }
  };

  handleFormReset = () => {
    this.setState({
      inputs: { ...this.initialState },
      errors: { ...this.initialState },
      isProfileShown: false,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    let needsRerender = false;
    for (const fieldName in this.state.inputs) {
      if (this.state.inputs[fieldName] === '') {
        this.setState((prevState) => ({
          ...prevState,
          errors: {
            ...prevState.errors,
            [fieldName]: emptyErrorText,
          },
        }));
        needsRerender = true;
      }
    }

    if (needsRerender) {
      return;
    }

    if (
      Object.values(this.state.errors).every((el) => {
        return el === '';
      })
    ) {
      alert('the form is validated and submitted');
      this.setState({
        inputs: { ...this.initialState },
        errors: { ...this.initialState },
        isProfileShown: true,
      });
      console.log('this.state.isProfileShown');
      console.log(this.state.isProfileShown);
      return;
    } else {
      alert('the form CANNOT be validated');
    }
  };

  render() {
    console.log('this.state.isProfileShown SFTER RENDER');
    console.log(this.state.isProfileShown);
    return (
      <div>
        <Profile />
        {/* {this.state.isProfileShown && <Profile />}
        {!this.state.isProfileShown && (
          <Form
            handleSubmit={this.handleSubmit}
            handleFormReset={this.handleFormReset}
            onChange={this.onChange}
            state={this.state}
          />
        )} */}
      </div>
    );
  }
}

export default App;
