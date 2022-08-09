import React, {useState} from 'react';
import styles from './style.module.css';
import CustomButton from './CustomButton';
import CustomInput from './CustomInput';
import CustomTextarea from './CustomTextarea';

const inputInitialState = {
  name: '',
  surname: '',
  num: '',
  date: '',
  website: '',
  about: '',
  technologyStack: '',
  lastProjectDescription: '',
}

const errorInitialState = {
  nameError: '',
  surnameError: '',
  numError: '',
  dateError: '',
  websiteError: '',
  aboutError: '',
  technologyStackError: '',
  lastProjectDescriptionError: '',
}

function Form(props) {
  const [inputState, setInputState] = useState(inputInitialState);
  const [errorState, setErrorState] = useState(errorInitialState);

  const handleInputChange = function(event) {
    const target = event.target;
    const value = target.value.trim();
    const name = target.name;
    
    setInputState({
      ...inputState,
      [name]: value,
    });
  }

  const clear = function() {
    setInputState(inputInitialState);
    setErrorState(errorInitialState);
  }

  const validateOnEmpty = (value) => {
    if (!value) {
      return 'Поле пустое. Заполните пожалуйста';
    }
    return '';
  }

  const validateName = (value) => {
    const emptyError = validateOnEmpty(value);
    if (emptyError) {
      return emptyError;
    }
    if (value[0].toUpperCase() !== value[0]) {
      return 'Имя должно начинаться с большой буквы!';
    }
    return '';
  }

  const validatePhoneNumber = (value) => {
    const phoneReg = /^[0-9]{1}-[0-9]{4}-[0-9]{2}-[0-9]{2}$/;
    const emptyError = validateOnEmpty(value);

    if (emptyError) {
      return emptyError;
    }
    if (!phoneReg.test(value)) {
      return 'Телефон должен быть формата X-XXXX-XX-XX';
    }
    return '';
  }

  const validateWebsite = (value) => {
    const emptyError = validateOnEmpty(value);
    if (emptyError) {
      return emptyError;
    }
    if (!(value.includes('https://') && !value.includes('https://', 1))) {
      return 'Сайт должен начинаться с https://!';
    }
    return '';
  }

  const validateTextarea = (value) => {
    const emptyError = validateOnEmpty(value);
    if (emptyError) {
      return emptyError;
    }
    if (value.length > 600) {
      return undefined;
    }
    return '';
  }

  const submit = function(event) {
    event.preventDefault();

    let tempErrorState = {
      nameError: validateName(inputState.name),
      surnameError: validateName(inputState.surname),
      dateError: validateOnEmpty(inputState.date),
      numError: validatePhoneNumber(inputState.num),
      websiteError: validateWebsite(inputState.website),
      aboutError: validateTextarea(inputState.about),
      technologyStackError: validateTextarea(inputState.technologyStack),
      lastProjectDescriptionError: validateTextarea(inputState.lastProjectDescription),
    };
    const isValid = Object.keys(tempErrorState).every(key => tempErrorState[key] === '')
    setErrorState(tempErrorState);
    if (isValid) {
        props.onSave(inputState);
    }
  }

  return (
    <form className={styles.formQuestionnaire} onSubmit={(event) => submit(event)}>
        <CustomInput name='name' error={errorState.nameError} label='Имя:' placeholder='Имя' onChange={(event) => handleInputChange(event)} />
        <CustomInput name='surname' error={errorState.surnameError} label='Фамилия:' placeholder='Фамилия' onChange={(event) => handleInputChange(event)} />
        <CustomInput name='date' error={errorState.dateError} label='Дата рождения:' type='date' onChange={(event) => handleInputChange(event)} />
        <CustomInput name='num' error={errorState.numError} label='Телефон:' placeholder='Телефон' type='text' maxlength='12' onChange={(event) => handleInputChange(event)} />
        <CustomInput name='website' error={errorState.websiteError} label='Сайт:' placeholder='Сайт' onChange={(event) => handleInputChange(event)} />
        <CustomTextarea name='about' label='О себе:' value={inputState.about} error={errorState.aboutError} placeholder='О себе' onChange={(event) => handleInputChange(event)} />
        <CustomTextarea name='technologyStack' label='Стек технологий:' value={inputState.technologyStack} error={errorState.technologyStackError} placeholder='Стек технологий' onChange={(event) => handleInputChange(event)} />
        <CustomTextarea name='lastProjectDescription' label='Описание последнего проекта:' value={inputState.lastProjectDescription} error={errorState.lastProjectDescriptionError} placeholder='Описание последнего проекта' onChange={(event) => handleInputChange(event)} />
        <div className={styles.btnWrapper}>
            <CustomButton name='save' value='Сохранить' className={styles.btnSave} type='submit' />
            <CustomButton name='cancel' value='Отменить' className={styles.btnCancel} type='reset' onClick={() => clear()} />
        </div>
    </form> 
  )
}

export default Form;