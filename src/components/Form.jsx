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

  const submit = function(event) {
    let tempErrorState = {...errorState};
    event.preventDefault();
    let isValid = true;
    if (!inputState.name) {
      tempErrorState = {
        ...tempErrorState,
        nameError: 'Поле пустое. Заполните пожалуйста',
      };
      isValid = false;
    } else if (inputState.name[0].toUpperCase() !== inputState.name[0]) {
      tempErrorState = {
        ...tempErrorState,
        nameError: 'Имя должно начинаться с большой буквы!',
      };
      isValid = false;
    } else {
      tempErrorState = {
        ...tempErrorState,
        nameError: '',
      };
    }

    if (!inputState.surname) {
      tempErrorState = {
        ...tempErrorState,
        surnameError: 'Поле пустое. Заполните пожалуйста',
      };
      isValid = false;
    } else if (inputState.surname[0].toUpperCase() !== inputState.surname[0]) {
      tempErrorState = {
        ...tempErrorState,
        surnameError: 'Имя должно начинаться с большой буквы!',
      };
      isValid = false;
    } else {
      tempErrorState = {
        ...tempErrorState,
        surnameError: '',
      };
    }

    if (!inputState.date) {
      tempErrorState = {
        ...tempErrorState,
        dateError: 'Поле пустое. Заполните пожалуйста',
      };
    } else {
      tempErrorState = {
        ...tempErrorState,
        dateError: '',
      };
    }

    const phoneReg = /^[0-9]{1}-[0-9]{4}-[0-9]{2}-[0-9]{2}$/;
    if (!inputState.num) {
      tempErrorState = {
        ...tempErrorState,
        numError: 'Поле пустое. Заполните пожалуйста.',
      };
      isValid = false;
    } else if (!phoneReg.test(inputState.num)) {
      tempErrorState = {
        ...tempErrorState,
        numError: 'Телефон должен быть формата X-XXXX-XX-XX',
    };
    isValid = false;
    } else {
      tempErrorState = {
        ...tempErrorState,
        numError: '',
      };
    }

    if (!inputState.website) {
      tempErrorState = {
        ...tempErrorState,
        websiteError: 'Поле пустое. Заполните пожалуйста',
      };
      isValid = false;
    } else if (!(inputState.website.includes('https://') && !inputState.website.includes('https://', 1))) {
      tempErrorState = {
        ...tempErrorState,
        websiteError: 'Сайт должен начинаться с https://!',
      };
      isValid = false;
    } else {
      tempErrorState = {
        ...tempErrorState,
        websiteError: '',
      };
    }

    if (!inputState.about) {
      tempErrorState = {
        ...tempErrorState,
        aboutError: 'Поле пустое. Заполните пожалуйста',
      };
      isValid = false;
    } else if (inputState.about.length > 600) {
      isValid = false;
    } else {
      tempErrorState = {
        ...tempErrorState,
        aboutError: '',
      };
    }

    if (!inputState.technologyStack) {
      tempErrorState = {
        ...tempErrorState,
        technologyStackError: 'Поле пустое. Заполните пожалуйста',
      };
      isValid = false;
    } else if (inputState.technologyStack.length > 600) {
      isValid = false;
    } else {
      tempErrorState = {
        ...tempErrorState,
        technologyStackError: '',
      };
    }

    if (!inputState.lastProjectDescription) {
      tempErrorState = {
        ...tempErrorState,
        lastProjectDescriptionError: 'Поле пустое. Заполните пожалуйста',
      };
      isValid = false;
    } else if (inputState.lastProjectDescription.length > 600) {
      isValid = false;
    } else {
      tempErrorState = {
        ...tempErrorState,
        lastProjectDescriptionError: '',
      };
    }

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