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
    };
  }

  genHandler = (fieldName) => {
    return (field, errorField) => {
      let state = {};
      state[fieldName] = field;
      this.setState(state);
    };
  };

  mySubmit = (event) => {
    event.preventDefault();
    let result = { ...this.state };
    console.log(result);
  };
  render() {
    return (
      <form onSubmit={this.mySubmit}>
        <FormHeader />
        <div>
          <InputField
            value={this.state.name}
            field="Имя"
            onChangeValue={this.genHandler('name')}
          />
          <InputField
            value={this.state.surname}
            field="Фамилия"
            onChangeValue={this.genHandler('surname')}
          />
          <InputField
            value={this.state.dateOfBirth}
            field="Дата рождения"
            onChangeValue={this.genHandler('dateOfBirth')}
          />
          <InputField
            value={this.state.phone}
            field="Телефон"
            onChangeValue={this.genHandler('phone')}
          />
          <InputField
            value={this.state.page}
            field="Сайт"
            onChangeValue={this.genHandler('page')}
          />
          <TextAreaField
            value={this.state.aboutMe}
            field="О себе"
            onChangeValue={this.genHandler('aboutMe')}
          />
          <TextAreaField
            value={this.state.techStack}
            field="Стек технологий"
            onChangeValue={this.genHandler('techStack')}
          />
          <TextAreaField
            value={this.state.lastProject}
            field="Описание последнего проекта"
            onChangeValue={this.genHandler('lastProject')}
          />
        </div>
        <Button type="submit" value="Сохранить" />
        <Button type="reset" value="Отмена" />
      </form>
    );
  }
}

export default App;
