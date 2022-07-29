import React from 'react';
import styles from './components/style.module.css';
import CustomButton from './components/CustomButton';
import CustomInput from './components/CustomInput';
import CustomTextarea from './components/CustomTextarea';

class App extends React.Component {
  initialState = {
    name: '',
    nameError: '',
    surname: '',
    surnameError: '',
    num: '',
    numError: '',
    date: '',
    dateError: '',
    website: '',
    websiteError: '',
    about: '',
    aboutError: '',
    technologyStack: '',
    technologyStackError: '',
    lastProjectDescription: '',
    lastProjectDescriptionError: '',
    saved: false,
  };

  constructor(props) {
    super(props);
    this.state = this.initialState;
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value.trim();
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  clear() {
    this.setState(this.initialState);
  }

  submit(event) {
    event.preventDefault();
    let isValid = true;
    if (!this.state.name) {
      this.setState({
        nameError: 'Поле пустое. Заполните пожалуйста'
      });
      isValid = false;
    } else if (this.state.name[0].toUpperCase() !== this.state.name[0]) {
      this.setState({
        nameError: 'Имя должно начинаться с большой буквы!'
      });
      isValid = false;
    } else {
      this.setState({
        nameError: ''
      });
    }

    if (!this.state.surname) {
      this.setState({
        surnameError: 'Поле пустое. Заполните пожалуйста'
      });
      isValid = false;
    } else if (this.state.surname[0].toUpperCase() !== this.state.surname[0]) {
      this.setState({
        surnameError: 'Имя должно начинаться с большой буквы!'
      });
      isValid = false;
    } else {
      this.setState({
        surnameError: ''
      });
    }

    if (!this.state.date) {
      this.setState({
        dateError: 'Поле пустое. Заполните пожалуйста'
      });
    } else {
      this.setState({
        dateError: ''
      });
    }

    const phoneReg = /^[0-9]{1}-[0-9]{4}-[0-9]{2}-[0-9]{2}$/;
    if (!this.state.num) {
      this.setState({
         numError: 'Поле пустое. Заполните пожалуйста.'
      });
      isValid = false;
    } else if (!phoneReg.test(this.state.num)) {
      this.setState({
        numError: 'Телефон должен быть формата X-XXXX-XX-XX'
     });
     isValid = false;
    } else {
      this.setState({
        numError: ''
      });
    }

    if (!this.state.website) {
      this.setState({
        websiteError: 'Поле пустое. Заполните пожалуйста'
      });
      isValid = false;
    } else if (!(this.state.website.includes('https://') && !this.state.website.includes('https://', 1))) {
      this.setState({
        websiteError: 'Сайт должен начинаться с https://!'
      });
      isValid = false;
    } else {
      this.setState({
        websiteError: ''
      });
    }

    if (!this.state.about) {
      this.setState({
        aboutError: 'Поле пустое. Заполните пожалуйста'
      });
      isValid = false;
    } else if (this.state.about.length > 600) {
      isValid = false;
    } else {
      this.setState({
        aboutError: ''
      });
    }

    if (!this.state.technologyStack) {
      this.setState({
        technologyStackError: 'Поле пустое. Заполните пожалуйста'
      });
      isValid = false;
    } else if (this.state.technologyStack.length > 600) {
      isValid = false;
    } else {
      this.setState({
        technologyStackError: ''
      });
    }

    if (!this.state.lastProjectDescription) {
      this.setState({
        lastProjectDescriptionError: 'Поле пустое. Заполните пожалуйста'
      });
      isValid = false;
    } else if (this.state.lastProjectDescription.length > 600) {
      isValid = false;
    } else {
      this.setState({
        lastProjectDescriptionError: ''
      });
    }

    this.setState({
      saved: isValid
    });

    console.log(this.state);
  }

  render() {
    
    return (
      <div className={styles.formWrapper}>
        {this.state.saved ? (
          <div className={styles.formFinally}>
            <h1>{this.state.name} {this.state.surname}</h1>
            <span><span className={styles.formFinallyLabel}>Дата рождения: </span>{this.state.date}</span>
            <span><span className={styles.formFinallyLabel}>Телефон: </span>{this.state.num}</span>
            <span><span className={styles.formFinallyLabel}>Сайт: </span>{this.state.website}</span>
            <div><span className={styles.formFinallyLabel}>О себе: </span>{this.state.about}</div>
            <div><span className={styles.formFinallyLabel}>Стек технологий: </span>{this.state.technologyStack}</div>
            <div><span className={styles.formFinallyLabel}>Описание последнего проекта: </span>{this.state.lastProjectDescription}</div>
          </div>
        ) : (<form className={styles.formQuestionnaire} onSubmit={(event) => this.submit(event)}>
          <CustomInput name='name' error={this.state.nameError} label='Имя:' placeholder='Имя' onChange={(event) => this.handleInputChange(event)} />
          <CustomInput name='surname' error={this.state.surnameError} label='Фамилия:' placeholder='Фамилия' onChange={(event) => this.handleInputChange(event)} />
          <CustomInput name='date' error={this.state.dateError} label='Дата рождения:' type='date' onChange={(event) => this.handleInputChange(event)} />
          <CustomInput name='num' error={this.state.numError} label='Телефон:' placeholder='Телефон' type='text' maxlength='12' onChange={(event) => this.handleInputChange(event)} />
          <CustomInput name='website' error={this.state.websiteError} label='Сайт:' placeholder='Сайт' onChange={(event) => this.handleInputChange(event)} />
          <CustomTextarea name='about' label='О себе:' value={this.state.about} error={this.state.aboutError} placeholder='О себе' onChange={(event) => this.handleInputChange(event)} />
          <CustomTextarea name='technologyStack' label='Стек технологий:' value={this.state.technologyStack} error={this.state.technologyStackError} placeholder='Стек технологий' onChange={(event) => this.handleInputChange(event)} />
          <CustomTextarea name='lastProjectDescription' label='Описание последнего проекта:' value={this.state.lastProjectDescription} error={this.state.lastProjectDescriptionError} placeholder='Описание последнего проекта' onChange={(event) => this.handleInputChange(event)} />
          <div className={styles.btnWrapper}>
            <CustomButton name='save' value='Сохранить' className={styles.btnSave} type='submit' />
            <CustomButton name='cancel' value='Отменить' className={styles.btnCancel} type='reset' onClick={() => this.clear()} />
          </div>
        </form> 
        )
      }
      </div>
    );
  }
}

export default App;
