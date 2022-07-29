import React, { useState } from 'react';
import FormInput from './FormInput';
import FormTextarea from './FormTextArea';
import ErrorMessage from './ErrorMessage';
import style from './QuestionForm.module.css';

const emptyState = {
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
};

const getInputNumbersValue = (value) => value.replace(/\D/g, '');

const checkEmpty = (object, name) => {
  object[name + 'Error'] = '';
  if (!object[name]) {
    object[name + 'Error'] = 'Поле пустое. Заполните пожалуйста';
    return true;
  }
  return false;
}

const checkName = (object, name) => {
  if (checkEmpty(object, name)) {
    return true;
  }
  if (object[name].charAt(0) !== object[name].charAt(0).toUpperCase()) {
    object[name + 'Error'] = 'Первый символ должен быть с большой буквы';
    return true;
  }
  return false;
}

const checkPhone = (object, name) => {
  if (checkEmpty(object, name)) {
    return true;
  }
  if (!object[name].match(/\d-\d{4}-\d{2}-\d{2}/g)) {
    object[name + 'Error'] = 'Телефон должен быть в формате X-XXXX-XX-XX';
    return true;
  }
  return false;
}

const checkSite = (object, name) => {
  if (checkEmpty(object, name)) {
    return true;
  }
  if (!object[name].startsWith('https://')) {
    object[name + 'Error'] = 'Сайт должен начинаться с https://';
    return true;
  }
  return false;
}

const checkText = (object, name) => {
  if (checkEmpty(object, name)) {
    return true;
  }
  if (!object[name].length > 600) {
    object[name + 'Error'] = 'Ограничение 600 символов';
    return true;
  }
  return false;
}

export default function QuestionForm(props) {
  const [state, setState] = useState({ ...emptyState });

  const handleInput = (name, event) => {
    let value = event.target.value;
    if (name === 'phone') {
      const numbers = getInputNumbersValue(value);
      const x = numbers.match(/(\d{0,1})(\d{0,4})(\d{0,2})(\d{0,2})/);
      value = !x[2] ? x[1] : x[1] + "-" + x[2] + (x[3] ? "-" + x[3] : "") + (x[4] ? "-" + x[4] : "");
    }
    setState({ ...state, [name]: value });
  }

  const handleSubmit = () => {
    const copyState = { ...state };

    for (const [key, value] of Object.entries(copyState)) {
      copyState[key] = value.trim();
    }
    const hasErrors = checkName(copyState, 'name')
      || checkName(copyState, 'secondname')
      || checkEmpty(copyState, 'birthday')
      || checkPhone(copyState, 'phone')
      || checkSite(copyState, 'website')
      || checkText(copyState, 'about')
      || checkText(copyState, 'technologystack')
      || checkText(copyState, 'lastproject');
    if (hasErrors) {
      setState(copyState);
    } else {
      let { name,
        secondname,
        birthday,
        phone,
        website,
        about,
        technologystack,
        lastproject } = copyState;
      props.onSubmit({
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

  const handleReset = () => {
    setState({ ...emptyState });
  }

  return (
    <div>
      <header className={style.AppHeader}>
        <h1>Создание анкеты</h1>
      </header>
      <form className={style.QuestionForm}>
        <FormInput
          id='name'
          name='Имя'
          value={state.name}
          onChange={handleInput} />
        <ErrorMessage error={state.nameError} />
        <FormInput
          id='secondname'
          name='Фамилия'
          value={state.secondname}
          onChange={handleInput} />
        <ErrorMessage error={state.secondnameError} />
        <FormInput
          id='birthday'
          name='Дата рождения'
          value={state.birthday}
          onChange={handleInput}
          type="date"
        />
        <ErrorMessage error={state.birthdayError} />
        <FormInput
          id='phone'
          name='Телефон'
          value={state.phone}
          onChange={handleInput} />
        <ErrorMessage error={state.phoneError} />
        <FormInput
          id='website'
          name='Сайт'
          value={state.website}
          onChange={handleInput} />
        <ErrorMessage error={state.websiteError} />
        <FormTextarea
          id='about'
          name='О себе'
          value={state.about}
          onChange={handleInput} />
        <ErrorMessage error={state.aboutError} />
        <FormTextarea
          id='technologystack'
          name='Стек технологий'
          value={state.technologystack}
          onChange={handleInput} />
        <ErrorMessage error={state.technologystackError} />
        <FormTextarea
          id='lastproject'
          name='Описание последнего проекта'
          value={state.lastproject}
          onChange={handleInput} />
        <ErrorMessage error={state.lastprojectError} />
        <div className={style.buttons}>
          <button type="button" name="cancel" onClick={handleReset}>Отмена</button>
          <button type="button" name="save" onClick={handleSubmit}>Сохранить</button>
        </div>
      </form>
    </div>
  )
}
