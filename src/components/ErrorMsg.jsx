import React, { Component } from 'react';

class ErrorMsg extends Component {
  render() {
    switch (this.props.error) {
      case true:
        return <span>Пожалуйста, заполните пустое поле!</span>;
      case 'notCapLetName':
        return <span>Имя должно начинаться с заглавной буквы!</span>;
      case 'tooShortName':
        return <span>Имя должно содержать минимум 2 буквы</span>;
      case 'notCapLetSurname':
        return <span>Фамилия должна начинаться с заглавной буквы!</span>;
      case 'tooShortSurname':
        return <span>Фамилия должна содержать минимум 2 буквы</span>;
      case 'noNumbersInName':
        return <span>Имя должно содержать только буквы!</span>;
      case 'noNumbersInSurname':
        return <span>Фамилия должна содержать только буквы!</span>;
      case 'tooShortNumber':
        return <span>Номер телефона должен содержать 9 цифр</span>;
      case 'invalidPageAdress':
        return (
          <span>
            Адрес сайта должен начинаться с <i>https://</i>
          </span>
        );
      case 'forgettenDomen':
        return (
          <span>
            Не забудьте указать домен, например <i>.com</i>
          </span>
        );
      case 'toManySymbols':
        return <span>Превышен лимит символов!</span>;
      default:
        return '';
    }
  }
}
export default ErrorMsg;
