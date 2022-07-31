import { Component } from 'react';
import Input from './Input';
import TextArea from './TextArea';
import Button from './Button';
import styles from './FormCard.module.css';

class FormCard extends Component {
  handleSaveForm() {}
  handleCancelForm() {}

  render() {
    return (
      <form className={styles.form} onSubmit={this.handleSaveForm}>
        <Input
          title='Имя'
          type='text'
          placeholder='вас зовут...'
          name='name'
          value=''
          onChange={() => {}}
        />
        <Input
          title='Фамиля'
          type='text'
          placeholder='и ваша фамилия...'
          name='surname'
          value=''
          onChange={() => {}}
        />
        <Input
          title='Дата рождения'
          type='date'
          placeholder='вы родились...'
          name='date'
          value=''
          onChange={() => {}}
        />
        <Input
          title='Сайт'
          type='url'
          placeholder='тут укажите url вашего сайта...'
          name='site'
          value=''
          onChange={() => {}}
        />
        <Input
          title='Номер телефона'
          type='tel'
          placeholder='телефон для связи...'
          name='phone'
          value=''
          onChange={() => {}}
        />
        <TextArea
          title='О себе'
          type='text'
          placeholder='расскажите немного о себе...'
          name='about'
          value=''
          onChange={() => {}}
        />
        <TextArea
          title='Стек технологий'
          type='text'
          placeholder='опишите технологии, которыми владеете...'
          name='stack'
          value=''
          onChange={() => {}}
        />
        <TextArea
          title='Описание последнего проекта'
          type='text'
          placeholder='ваш последний проект был...'
          name='about'
          value=''
          onChange={() => {}}
        />
        <div className={styles.buttons}>
          <Button title='Сохранить' type='save' onClick={() => alert('Save')} />
          <Button
            title='Отменить'
            type='cancel'
            onClick={() => alert('Cancel')}
          />
        </div>
      </form>
    );
  }
}

export default FormCard;
