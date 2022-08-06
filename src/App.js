import React, { useState } from 'react';
import Button from './Button/Button';
import FormHeader from './FormHeader/FormHeader';
import InputField from './InputField/InputField';
import TextAreaField from './TextAreaField/TextAreaField';
import './app.module.css';

const App = () => {
  const defaultValues = {
    name: '',
    surname: '',
    dateOfBirth: '',
    phone: '',
    page: '',
    aboutMe: '',
    techStack: '',
    lastProject: '',
  };

  const defaultErrors = {
    name: '',
    surname: '',
    dateOfBirth: '',
    phone: '',
    page: '',
    aboutMe: '',
    techStack: '',
    lastProject: '',
    error: '',
  };

  const [values, setValues] = useState(defaultValues);
  const [errors, setErrors] = useState(defaultErrors);
  const [submit, setSubmit] = useState(false);

  function isValid(field, fieldName) {
    setErrors({ ...errors, [fieldName]: false });
    if (errors[fieldName] === false) {
      return '';
    }
    if (!field) {
      return 'Пожалуйста, заполните поле!';
    }
    if (fieldName === 'name' || fieldName === 'surname') {
      if (field.charAt(0) !== field.charAt(0).toUpperCase()) {
        return 'Первая буква должна быть заглавной!';
      }
      if (field.length < 2) {
        return 'Поле должно содержать минимум 2 буквы!';
      }
      if (/\d/.test(field)) {
        return 'Поле не должно содержать цифр!';
      }
    }
    if (fieldName === 'phone') {
      if (/[A-Za-z]/.test(field)) {
        return 'Поле не должно содержать букв!';
      }
      if (!/^\d{1}-\d{4}-\d{2}-\d{2}$/.test(field)) {
        return 'Номер телефона должен быть в формате X-XXXX-XX-XX!';
      }
    }
    if (fieldName === 'page') {
      if (!field.startsWith('https://')) {
        return 'Адрес сайта должен начинаться с https:// !';
      }
      if (!/.[a-z]{2,}$/.test(field)) {
        return 'Добавьте доменное имя!';
      }
    }
    if (
      fieldName === 'aboutMe' ||
      fieldName === 'techStack' ||
      fieldName === 'lastProject'
    ) {
      if (field.length > 600) {
        return 'Превышен лимит символов!';
      }
    }
  }

  const handleValueChange = function (event) {
    const target = event.target;
    let result = target.value.trim();
    const fieldName = target.name;
    setValues({
      ...values,
      [fieldName]: result,
    });
  };

  function mySubmit(event) {
    event.preventDefault();
    for (let i in errors) {
      errors[i] = isValid(values[i], i);
    }
    if (
      Object.values(values).includes('') ||
      Object.values(errors)
        .slice(0, 8)
        .some((elem) => Boolean(elem) === true)
    ) {
      setSubmit(false);
    } else {
      setSubmit(true);
    }
  }

  function resetForm(event) {
    setValues(defaultValues);
    setErrors(defaultErrors);
  }

  return (
    <div>
      {submit ? (
        <div>
          <h1>
            {values.name} {values.surname}
          </h1>
          <p>Дата рождения: {values.dateOfBirth}</p>
          <p>Телефон: {values.phone}</p>
          <p>Адрес сайта: {values.page}</p>
          <p>О себе: {values.aboutMe}</p>
          <p>Стек технологий: {values.techStack}</p>
          <p>Описание последнего проекта: {values.lastProject}</p>
        </div>
      ) : (
        <form onSubmit={mySubmit} onReset={resetForm}>
          <FormHeader />
          <div>
            <InputField
              name="name"
              field="Имя"
              onChange={(event) => handleValueChange(event)}
              error={errors.name}
            />
            <InputField
              name="surname"
              field="Фамилия"
              onChange={(event) => handleValueChange(event)}
              error={errors.surname}
            />
            <InputField
              name="dateOfBirth"
              field="Дата рождения"
              onChange={(event) => handleValueChange(event)}
              error={errors.dateOfBirth}
              type="date"
            />
            <InputField
              name="phone"
              field="Телефон"
              onChange={(event) => handleValueChange(event)}
              error={errors.phone}
            />
            <InputField
              name="page"
              field="Сайт"
              onChange={(event) => handleValueChange(event)}
              error={errors.page}
            />
            <TextAreaField
              name="aboutMe"
              field="О себе"
              onChange={(event) => handleValueChange(event)}
              error={errors.aboutMe}
            />
            <TextAreaField
              name="techStack"
              field="Стек технологий"
              onChange={(event) => handleValueChange(event)}
              error={errors.techStack}
            />
            <TextAreaField
              name="lastProject"
              field="Описание последнего проекта"
              onChange={(event) => handleValueChange(event)}
              error={errors.lastProject}
            />
          </div>
          <Button type="submit" value="Сохранить" />
          <Button type="reset" value="Отмена" />
        </form>
      )}
    </div>
  );
};

export default App;
