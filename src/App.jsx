import React from 'react';
import styles from './App.module.css';
import Input from './Input';
import Button from './Button';

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

  errorsTextTemplate = {
    name: 'Первый символ должен быть заглавной буквой',
    family_name: 'Первый символ должен быть заглавной буквой',
    date_of_birth: '',
    tel: 'Номер телефона не может содержать более 12 цифр',
    web_site: 'Адрес веб-сайта должен начинаться с https://',
    about: 'Текст не может содержать более 600 символов',
    skills: 'Текст не может содержать более 600 символов',
    last_proj_description: 'Текст не может содержать более 600 символов',
  };

  validate(value, inputName) {
    let objTest = {
      name: /^[A-Z].*$/,
      family_name: /^[A-Z].+$|^[А-Я].+$/,
      date_of_birth: '',
      tel: '',
      web_site: /^https|HTTPS:\/\/.*$/,
      about: '',
      skills: '',
      last_proj_description: '',
    };
    console.log('inputName>>>' + inputName);
    const regExp = new RegExp(objTest[inputName]);
    console.log('regExp>>' + regExp);
    console.log('from state>>' + this.state.inputs[inputName]);
    if (regExp.test(value)) {
      console.log(true);
      return true;
    }
    return false;
    // return true;
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
      }));
    } else {
      this.setState((prevState) => ({
        ...prevState,
        inputs: {
          ...prevState.inputs,
          [inputName]: value,
        },
      }));
      console.log('!!!not ok');
    }
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
          <form
            onSubmit={this.handleSubmit}
            onReset={this.handleFormReset}
            className={styles.formWrapper}
          >
            <div className={styles.groupedInputsWrapper}>
              <Input
                inputLabel="Имя"
                name="name"
                type="text"
                onChange={this.onChange}
                value={this.state.inputs.name}
              />
              <Input
                inputLabel="Фамилия"
                name="family_name"
                type="text"
                onChange={this.onChange}
                value={this.state.inputs.family_name}
              />
              <Input
                inputLabel="Дата рождения"
                name="date_of_birth"
                type="date"
                onChange={this.onChange}
                value={this.state.inputs.date_of_birth}
              />
              <Input
                inputLabel="Телефон"
                name="tel"
                type="tel"
                onChange={this.onChange}
                value={this.state.inputs.tel}
              />
              <Input
                inputLabel="Сайт"
                name="web_site"
                type="url"
                onChange={this.onChange}
                value={this.state.inputs.web_site}
              />
              <Input
                inputLabel="О себе"
                name="about"
                type="text"
                isTextArea={true}
                onChange={this.onChange}
                value={this.state.inputs.about}
              />
              <Input
                inputLabel="Стек технологий"
                name="skills"
                type="text"
                isTextArea={true}
                onChange={this.onChange}
                value={this.state.inputs.skills}
              />
              <Input
                inputLabel="Описание последнего проекта"
                name="last_proj_description"
                type="text"
                isTextArea={true}
                onChange={this.onChange}
                value={this.state.inputs.last_proj_description}
              />
            </div>
            <div className={styles.buttonWrapper}>
              <Button type="reset" buttonName="Отменить" />
              <Button type="submit" buttonName="Сохранить" />
            </div>
          </form>
        </section>
      </div>
    );
  }
}

export default App;
