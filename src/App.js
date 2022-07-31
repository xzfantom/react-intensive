import React, { Component } from 'react';
import Button from './components/Button';
import FormHeader from './components/FormHeader';
import InputField from './components/InputField';
import TextAreaField from './components/TextAreaField';
import './cssModules/app.module.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      surname: '',
      dateOfBirth: '',
      phone: '',
      page: '',
      aboutMe: '',
      techStack: '',
      lastProject: '',
      aboutMeLength: '',
      techStackLength: '',
      lastProjectLength: '',
      nameError: false,
      surnameError: false,
      dateOfBirthError: false,
      phoneError: false,
      pageError: false,
      aboutMeError: false,
      techStackError: false,
      lastProjectError: false,
      submit: false,
    };
    this.defaultState = JSON.stringify(this.state);
  }

  isValidName = (field) => {
    if (field.charAt(0) !== field.charAt(0).toUpperCase()) {
      return 'notCapLetName';
    }
    if (field.length < 2) {
      return 'tooShortName';
    }
    if (/\d/.test(field)) {
      return 'noNumbersInName';
    }
  };

  isValidSurname = (field) => {
    if (field.charAt(0) !== field.charAt(0).toUpperCase()) {
      return 'notCapLetSurname';
    }
    if (field.length < 2) {
      return 'tooShortSurname';
    }
    if (/\d/.test(field)) {
      return 'noNumbersInSurname';
    }
  };

  tooShortNumber = (field) => {
    if (field.length < 12) {
      return 'tooShortNumber';
    }
  };

  isValidUrl = (field) => {
    let regexp = /\.[a-z()]{2,}$/;
    if (!field.startsWith('https://') && field.length < 8) {
      return 'invalidPageAdress';
    }
    if (!regexp.test(field)) {
      return 'forgettenDomen';
    }
  };

  validateNumberOfSymbols = (value) => {
    if (value.length > 600) {
      return 'toManySymbols';
    }
  };

  genHandler = (fieldName, errorFieldName, errorFunc) => {
    return (field, errorField) => {
      let state = {};
      state[fieldName] = field.trim();
      state[errorFieldName] = false;
      if (!field) {
        state[errorFieldName] = true;
      } else if (errorFunc) {
        state[errorFieldName] = errorFunc(field);
      }
      if (fieldName === 'phone') {
        const x = field
          .replace(/\D/g, '')
          .match(/(\d{0,1})(\d{0,4})(\d{0,2})(\d{0,2})/);
        field = !x[2]
          ? x[1]
          : x[1] +
            '-' +
            x[2] +
            (x[3] ? '-' + x[3] : '') +
            (x[4] ? '-' + x[4] : '');
        state[fieldName] = field;
      }
      this.setState(state);
    };
  };

  mySubmit = (event) => {
    event.preventDefault();
    let values = Object.values(this.state).slice(0, 8);
    let errors = Object.values(this.state).slice(11, 19);
    if (values.includes('') || errors.some((elem) => Boolean(elem) === true)) {
      this.setState({ submit: false });
    } else {
      this.setState({ submit: true });
      console.log(this.state.submit);
    }
  };

  resetForm = (event) => {
    event.preventDefault();
    this.setState(JSON.parse(this.defaultState));
  };

  render() {
    const submit = this.state.submit;
    if (submit === false) {
      return (
        <form onSubmit={this.mySubmit} onReset={this.resetForm}>
          <FormHeader />
          <div>
            <InputField
              value={this.state.name}
              field="Имя"
              onChangeValue={this.genHandler(
                'name',
                'nameError',
                this.isValidName
              )}
              error={this.state.nameError}
            />
            <InputField
              value={this.state.surname}
              field="Фамилия"
              onChangeValue={this.genHandler(
                'surname',
                'surnameError',
                this.isValidSurname
              )}
              error={this.state.surnameError}
            />
            <InputField
              value={this.state.dateOfBirth}
              field="Дата рождения"
              onChangeValue={this.genHandler('dateOfBirth', 'dateOfBirthError')}
              error={this.state.dateOfBirthError}
              type="date"
            />
            <InputField
              value={this.state.phone}
              field="Телефон"
              onChangeValue={this.genHandler(
                'phone',
                'phoneError',
                this.tooShortNumber
              )}
              error={this.state.phoneError}
            />
            <InputField
              value={this.state.page}
              field="Сайт"
              onChangeValue={this.genHandler(
                'page',
                'pageError',
                this.isValidUrl
              )}
              error={this.state.pageError}
            />
            <TextAreaField
              value={this.state.aboutMe}
              field="О себе"
              onChangeValue={this.genHandler(
                'aboutMe',
                'aboutMeError',
                this.validateNumberOfSymbols
              )}
              error={this.state.aboutMeError}
              textLength={this.state.aboutMe.length}
            />
            <TextAreaField
              value={this.state.techStack}
              field="Стек технологий"
              onChangeValue={this.genHandler(
                'techStack',
                'techStackError',
                this.validateNumberOfSymbols
              )}
              error={this.state.techStackError}
              textLength={this.state.techStack.length}
            />
            <TextAreaField
              value={this.state.lastProject}
              field="Описание последнего проекта"
              onChangeValue={this.genHandler(
                'lastProject',
                'lastProjectError',
                this.validateNumberOfSymbols
              )}
              error={this.state.lastProjectError}
              textLength={this.state.lastProject.length}
            />
          </div>
          <Button type="submit" value="Сохранить" />
          <Button type="reset" value="Отмена" />
        </form>
      );
    } else {
      return (
        <div>
          <h1>
            {this.state.name} {this.state.surname}
          </h1>
          <div>
            <p>Дата рождения: {this.state.dateOfBirth}</p>
            <p>Номер телефона: {this.state.phone}</p>
            <p>Сайт: {this.state.page}</p>
            <p>О себе: {this.state.aboutMe}</p>
            <p>Стек технологий: {this.state.techStack}</p>
            <p>Описание последнего проекта: {this.state.lastProject}</p>
          </div>
        </div>
      );
    }
  }
}

export default App;
