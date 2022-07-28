import React, { Component } from 'react';
import Button from './components/Button';
import FormHeader from './components/FormHeader';
import InputField from './components/InputField';
import TextAreaField from './components/TextAreaField';
import './App.css';

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

  onChangeName = (name) => {
    this.setState({ name });
  };
  onChangeSurname = (surname) => {
    this.setState({ surname });
  };
  onChangeDateOfBirth = (dateOfBirth) => {
    this.setState({ dateOfBirth });
  };
  onChangePhone = (phone) => {
    this.setState({ phone });
  };
  onChangePage = (page) => {
    this.setState({ page });
  };
  onChangeAboutMe = (aboutMe) => {
    this.setState({ aboutMe });
  };
  onChangeTechStack = (techStack) => {
    this.setState({ techStack });
  };
  onChangeLastProject = (lastProject) => {
    this.setState({ lastProject });
  };

  mySubmit = (event) => {
    event.preventDefault();
    let result = {};
    for (let i = 0; i < Object.entries(this.state).length; i++) {
      result[Object.keys(this.state)[i]] = Object.values(this.state)[i];
    }
    console.log(result);
  };
  render() {
    const name = this.state.name;
    const surname = this.state.surname;
    const dateOfBirth = this.state.dateOfBirth;
    const phone = this.state.phone;
    const page = this.state.page;
    const aboutMe = this.state.aboutMe;
    const techStack = this.state.techStack;
    const lastProject = this.state.lastProject;
    return (
      <form onSubmit={this.mySubmit}>
        <FormHeader />
        <div>
          <InputField
            value={name}
            field="Имя"
            onChangeValue={this.onChangeName}
          />
          <InputField
            value={surname}
            field="Фамилия"
            onChangeValue={this.onChangeSurname}
          />
          <InputField
            value={dateOfBirth}
            field="Дата рождения"
            onChangeValue={this.onChangeDateOfBirth}
          />
          <InputField
            value={phone}
            field="Телефон"
            onChangeValue={this.onChangePhone}
          />
          <InputField
            value={page}
            field="Сайт"
            onChangeValue={this.onChangePage}
          />
          <TextAreaField
            value={aboutMe}
            field="О себе"
            onChangeValue={this.onChangeAboutMe}
          />
          <TextAreaField
            value={techStack}
            field="Стек технологий"
            onChangeValue={this.onChangeTechStack}
          />
          <TextAreaField
            value={lastProject}
            field="Описание последнего проекта"
            onChangeValue={this.onChangeLastProject}
          />
        </div>
        <Button type="submit" value="Сохранить" />
        <Button type="reset" value="Отмена" />
      </form>
    );
  }
}

export default App;
