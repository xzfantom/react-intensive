import React, { useState } from 'react';
import FormInput from './FormInput';
import FormTextarea from './FormTextArea';
import ErrorMessage from './ErrorMessage';
import style from '../styles/QuestionForm.module.css';

const fields = {
  name: '',
  secondname: '',
  birthday: '',
  phone: '',
  website: '',
  about: '',
  technologystack: '',
  lastproject: '',
}

const getInputNumbersValue = (value) => value.replace(/\D/g, '');

const checkEmpty = (object, name, errors) => {
  errors[name] = '';
  if (!object[name]) {
    errors[name] = 'Поле пустое. Заполните пожалуйста';
  }
}

const checkName = (object, name, errors) => {
  checkEmpty(object, name, errors)
  if (errors[name]) {
    return;
  }
  if (object[name].charAt(0) !== object[name].charAt(0).toUpperCase()) {
    errors[name] = 'Первый символ должен быть с большой буквы';
  }
}

const checkPhone = (object, name, errors) => {
  checkEmpty(object, name, errors)
  if (errors[name]) {
    return;
  }
  if (!object[name].match(/\d-\d{4}-\d{2}-\d{2}/g)) {
    errors[name] = 'Телефон должен быть в формате X-XXXX-XX-XX';
  }
}

const checkSite = (object, name, errors) => {
  checkEmpty(object, name, errors)
  if (errors[name]) {
    return;
  }
  if (!object[name].startsWith('https://')) {
    errors[name] = 'Сайт должен начинаться с https://';
  }
}

const checkText = (object, name, errors) => {
  checkEmpty(object, name, errors)
  if (errors[name]) {
    return;
  }
  if (!object[name].length > 600) {
    errors[name] = 'Ограничение 600 символов';
  }
}

export default function QuestionForm(props) {
  const [state, setState] = useState({ ...fields });
  const [errors, setError] = useState({ ...fields });


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
    const copyErrors = { ...errors };

    for (const [key, value] of Object.entries(copyState)) {
      copyState[key] = value.trim();
    }
    checkName(copyState, 'name', copyErrors);
    checkName(copyState, 'secondname', copyErrors);
    checkEmpty(copyState, 'birthday', copyErrors);
    checkPhone(copyState, 'phone', copyErrors);
    checkSite(copyState, 'website', copyErrors);
    checkText(copyState, 'about', copyErrors);
    checkText(copyState, 'technologystack', copyErrors);
    checkText(copyState, 'lastproject', copyErrors);

    let hasErrors = Object.values(copyErrors).some((value) => !!value);
    if (hasErrors) {
      setError(copyErrors);
    } else {
      props.onSubmit(copyState);
    }
  }

  const handleReset = () => {
    setState({ ...fields });
    setError({ ...fields });
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
        <ErrorMessage error={errors.name} />
        <FormInput
          id='secondname'
          name='Фамилия'
          value={state.secondname}
          onChange={handleInput} />
        <ErrorMessage error={errors.secondname} />
        <FormInput
          id='birthday'
          name='Дата рождения'
          value={state.birthday}
          onChange={handleInput}
          type="date"
        />
        <ErrorMessage error={errors.birthday} />
        <FormInput
          id='phone'
          name='Телефон'
          value={state.phone}
          onChange={handleInput} />
        <ErrorMessage error={errors.phone} />
        <FormInput
          id='website'
          name='Сайт'
          value={state.website}
          onChange={handleInput} />
        <ErrorMessage error={errors.website} />
        <FormTextarea
          id='about'
          name='О себе'
          value={state.about}
          onChange={handleInput} />
        <ErrorMessage error={errors.about} />
        <FormTextarea
          id='technologystack'
          name='Стек технологий'
          value={state.technologystack}
          onChange={handleInput} />
        <ErrorMessage error={errors.technologystack} />
        <FormTextarea
          id='lastproject'
          name='Описание последнего проекта'
          value={state.lastproject}
          onChange={handleInput} />
        <ErrorMessage error={errors.lastproject} />
        <div className={style.buttons}>
          <button type="button" name="cancel" onClick={handleReset}>Отмена</button>
          <button type="button" name="save" onClick={handleSubmit}>Сохранить</button>
        </div>
      </form>
    </div>
  )
}
