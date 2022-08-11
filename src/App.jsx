import React, { useState } from 'react';
import Form from './Form';
import { validationRegExps, validationIsNotEmpty } from './helpers/validations';
import { errorsTextTemplate, emptyErrorText } from './helpers/errors';

const App = () => {
  const initialState = {
    firstName: '',
    lastName: '',
    date_of_birth: '',
    telephone: '',
    web_site: '',
    about: '',
    skills: '',
    last_project_description: '',
  };

  const [inputs, setInputs] = useState({ ...initialState });
  const [errors, setErrors] = useState({ ...initialState });
  const [isProfileShown, setIsProfileShown] = useState(false);

  const validateIsNotEmpty = (value) => {
    if (validationIsNotEmpty.test(value)) {
      return true;
    }
    return false;
  };

  const validateIsValid = (value, inputName) => {
    const regExp = new RegExp(validationRegExps[inputName]);
    return regExp.test(value);
  };

  const applyMask = (value, mask) => {
    const result = [];
    for (let i = 0; i < value.length; i++) {
      if (i >= mask.length) break;
      result[i] = (typeof mask[i] === 'string' ? mask[i] : '') + value[i].replace(mask[i], '');
    }
    let maskedValue = result.join('');
    return maskedValue;
  };

  const onChange = (event) => {
    const inputName = event.target.name;
    let value = event.target.value.trim();

    if (validateIsNotEmpty(value) === false) {
      setInputs((prevState) => ({
        ...prevState,
        [inputName]: value,
      }));
      setErrors((prevState) => ({
        ...prevState,
        [inputName]: '',
      }));
    }

    if (validateIsValid(value, inputName)) {
      setInputs((prevState) => ({
        ...prevState,
        [inputName]: value,
      }));
      setErrors((prevState) => ({
        ...prevState,
        [inputName]: '',
      }));
    }
    if (validateIsValid(value, inputName) === false) {
      setInputs((prevState) => ({
        ...prevState,
        [inputName]: value,
      }));
      setErrors((prevState) => ({
        ...prevState,
        [inputName]: errorsTextTemplate[inputName],
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

      value = applyMask(value, telephoneNumberMask);
      setInputs((prevState) => ({
        ...prevState,
        [inputName]: value,
      }));
    }

    if (validateIsValid(value, inputName)) {
      setInputs((prevState) => ({
        ...prevState,
        [inputName]: value,
      }));
      setErrors((prevState) => ({
        ...prevState,
        [inputName]: '',
      }));
    }

    if (validateIsValid(value, inputName) === false) {
      setInputs((prevState) => ({
        ...prevState,
        [inputName]: value,
      }));
      setErrors((prevState) => ({
        ...prevState,
        [inputName]: errorsTextTemplate[inputName],
      }));
    }
  };

  const handleFormReset = () => {
    setInputs({ ...initialState });
    setErrors({ ...initialState });
    setIsProfileShown(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let needsRerender = false;
    for (const fieldName in inputs) {
      if (inputs[fieldName] === '') {
        setErrors((prevState) => ({
          ...prevState,
          [fieldName]: emptyErrorText,
        }));
        needsRerender = true;
      }
    }

    if (needsRerender) {
      return;
    }

    if (
      Object.values(errors).every((el) => {
        return el === '';
      })
    ) {
      setErrors({ ...initialState });
      setIsProfileShown(true);
      return;
    }
  };

  return (
    <Form
      handleSubmit={handleSubmit}
      handleFormReset={handleFormReset}
      onChange={onChange}
      inputs={inputs}
      errors={errors}
      isProfileShown={isProfileShown}
    />
  );
};

export default App;
