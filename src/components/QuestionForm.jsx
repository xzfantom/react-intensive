import React from 'react';
import FormInput from './FormInput';
import FormTextarea from './FormTextArea';
import ErrorMessage from './ErrorMessage';
import style from './QuestionForm.module.css';

const emptyState = () => ({
  name: '',
  secondname: '',
  birthday: '',
  phone: '',
  website: '',
  about: '',
  technologystack: '',
  lastproject: '',
  nameError: '',
  secondnameError: '',
  birthdayError: '',
  phoneError: '',
  websiteError: '',
  aboutError: '',
  technologystackError: '',
  lastprojectError: '',
});

const getInputNumbersValue = (value) => value.replace(/\D/g, '');

class QuestionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = emptyState();
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  handleInput(name, event) {
    let value = event.target.value;
    if (name === 'phone') {
      const numbers = getInputNumbersValue(value);
      if (numbers.length <= 2) {
        value = numbers;
      }
      if (numbers.length > 2) {
        value = `${numbers[0]}-${numbers.slice(1, Math.min(numbers.length, 5))}`;
      }
      if (numbers.length > 5) {
        value += `-${numbers.slice(5, Math.min(numbers.length, 7))}`;
      }
      if (numbers.length > 7) {
        value += `-${numbers.slice(7, Math.min(numbers.length, 9))}`;
      }
    }
    this.setState({ [name]: value });
  }

  handleSubmit() {
    const copyState = { ...this.state };
    let hasErrors = false;
    for (const [key, value] of Object.entries(copyState)) {
      copyState[key] = value.trim();
    }
    if (copyState.name === '') {
      copyState.nameError = 'Поле пустое. Заполните пожалуйста';
      hasErrors = true;
    } else if (copyState.name.charAt(0) !== copyState.name.charAt(0).toUpperCase()) {
      copyState.nameError = 'Первый символ должен быть с большой буквы';
      hasErrors = true;
    } else {
      copyState.nameError = '';
    }
    if (copyState.secondname === '') {
      copyState.secondnameError = 'Поле пустое. Заполните пожалуйста';
      hasErrors = true;
    } else if (copyState.secondname.charAt(0) !== copyState.secondname.charAt(0).toUpperCase()) {
      copyState.secondnameError = 'Первый символ должен быть с большой буквы';
      hasErrors = true;
    } else {
      copyState.secondnameError = '';
    }
    if (copyState.birthday === '') {
      copyState.birthdayError = 'Поле пустое. Заполните пожалуйста';
      hasErrors = true;
    } else {
      copyState.birthdayError = '';
    }
    if (copyState.phone === '') {
      copyState.phoneError = 'Поле пустое. Заполните пожалуйста';
      hasErrors = true;
    } else if (!copyState.phone.match(/\d-\d{4}-\d{2}-\d{2}/g)) {
      copyState.phoneError = 'Телефон должен быть в формате X-XXXX-XX-XX';
      hasErrors = true;
    } else {
      copyState.phoneError = '';
    }
    if (copyState.website === '') {
      copyState.websiteError = 'Поле пустое. Заполните пожалуйста';
      hasErrors = true;
    } else if (!copyState.website.startsWith('https://')) {
      copyState.websiteError = 'Сайт должен начинаться с https://';
      hasErrors = true;
    } else {
      copyState.websiteError = '';
    }
    if (copyState.about === '') {
      copyState.aboutError = 'Поле пустое. Заполните пожалуйста';
      hasErrors = true;
    } else if (copyState.about.length > 600) {
      copyState.aboutError = 'Ограничение 600 символов';
      hasErrors = true;
    } else {
      copyState.aboutError = '';
    }
    if (copyState.technologystack === '') {
      copyState.technologystackError = 'Поле пустое. Заполните пожалуйста';
      hasErrors = true;
    } else if (copyState.technologystack.length > 600) {
      copyState.technologystackError = 'Ограничение 600 символов';
      hasErrors = true;
    } else {
      copyState.technologystackError = '';
    }
    if (copyState.lastproject === '') {
      copyState.lastprojectError = 'Поле пустое. Заполните пожалуйста';
      hasErrors = true;
    } else if (copyState.lastproject.length > 600) {
      copyState.lastprojectError = 'Ограничение 600 символов';
      hasErrors = true;
    } else {
      copyState.lastprojectError = '';
    }
    if (hasErrors) {
      this.setState(copyState);
    } else {
      let { name,
        secondname,
        birthday,
        phone,
        website,
        about,
        technologystack,
        lastproject } = copyState;
      this.props.onSubmit({
        name,
        secondname,
        birthday,
        phone,
        website,
        about,
        technologystack,
        lastproject
      });
    }
  }

  handleReset() {
    this.setState(emptyState());
  }

  render() {
    return (
      <div>
        <header className={style.AppHeader}>
          <h1>Создание анкеты</h1>
        </header>
        <form className={style.QuestionForm}>
          <FormInput id='name' name='Имя' value={this.state.name} onChange={this.handleInput} />
          <ErrorMessage error={this.state.nameError} />
          <FormInput id='secondname' name='Фамилия' value={this.state.secondname} onChange={this.handleInput} />
          <ErrorMessage error={this.state.secondnameError} />
          <FormInput id='birthday'
            name='Дата рождения'
            value={this.state.birthday}
            onChange={this.handleInput}
            type="date"
          />
          <ErrorMessage error={this.state.birthdayError} />
          <FormInput id='phone'
            name='Телефон'
            value={this.state.phone}
            onChange={this.handleInput} />
          <ErrorMessage error={this.state.phoneError} />
          <FormInput id='website' name='Сайт' value={this.state.website} onChange={this.handleInput} />
          <ErrorMessage error={this.state.websiteError} />
          <FormTextarea id='about' name='О себе' value={this.state.about} onChange={this.handleInput} />
          <ErrorMessage error={this.state.aboutError} />
          <FormTextarea id='technologystack' name='Стек технологий' value={this.state.technologystack} onChange={this.handleInput} />
          <ErrorMessage error={this.state.technologystackError} />
          <FormTextarea id='lastproject' name='Описание последнего проекта' value={this.state.lastproject} onChange={this.handleInput} />
          <ErrorMessage error={this.state.lastprojectError} />
          <div className={style.buttons}>
            <button type="button" name="cancel" onClick={this.handleReset}>Отмена</button>
            <button type="button" name="save" onClick={this.handleSubmit}>Сохранить</button>
          </div>
        </form>
      </div>
    )
  }
}

export default QuestionForm;