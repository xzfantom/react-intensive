import React, { useState } from 'react';
import FormInput from '../FormInput/FormInput';
import FormTextarea from '../FormTextArea/FormTextArea';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import { validate, phoneFormat } from '../../utils/formUtils'
import style from './QuestionForm.module.css';
import FormButton from '../FormButton/FormButton';

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


export default function QuestionForm(props) {
  const [state, setState] = useState({ ...fields });
  const [errors, setError] = useState({ ...fields });


  const handleInput = (name, event) => {
    let value = event.target.value;
    if (name === 'phone') {
      value = phoneFormat(value);
    }
    setState({ ...state, [name]: value });
  }

  const handleSubmit = () => {
    const copyState = { ...state };
    const newErrors = { ...fields };

    for (const [key, value] of Object.entries(copyState)) {
      copyState[key] = value.trim();
    }

    validate(copyState, newErrors);
    let hasErrors = Object.values(newErrors).some((value) => !!value);
    if (hasErrors) {
      setError(newErrors);
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
      <header className={style.appHeader}>
        <h1>Создание анкеты</h1>
      </header>
      <form className={style.questionForm}>
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
          <FormButton
            name='cancel'
            caption='Отмена'
            onClick={handleReset}
          />
          <FormButton
            name='save'
            caption='Сохранить'
            onClick={handleSubmit}
          />
        </div>
      </form>
    </div>
  )
}
