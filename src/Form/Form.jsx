import React from 'react';
import styles from './Form.module.css';
import Input from './Input';
import Button from './Button';

class Form extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { handleSubmit, handleFormReset, onChange, state } = this.props;

    return (
      <form
        onSubmit={handleSubmit}
        onReset={handleFormReset}
        className={styles.formWrapper}
        onChange={onChange}
      >
        <div className={styles.groupedInputsWrapper}>
          <Input inputLabel="Имя" name="name" type="text" onChange={onChange} state={state} />
          <Input
            inputLabel="Фамилия"
            name="family_name"
            type="text"
            onChange={onChange}
            state={state}
          />
          <Input
            inputLabel="Дата рождения"
            name="date_of_birth"
            type="date"
            onChange={onChange}
            state={state}
          />
          <Input
            inputLabel="Телефон"
            name="tel"
            type="tel"
            placeholder="7-7777-77-77"
            onChange={onChange}
            state={state}
          />
          <Input
            inputLabel="Сайт"
            name="web_site"
            type="url"
            placeholder="https://..."
            onChange={onChange}
            state={state}
          />
          <Input
            inputLabel="О себе"
            name="about"
            type="text"
            isTextArea={true}
            onChange={onChange}
            state={state}
          />
          <Input
            inputLabel="Стек технологий"
            name="skills"
            type="text"
            isTextArea={true}
            onChange={onChange}
            state={state}
          />
          <Input
            inputLabel="Описание последнего проекта"
            name="last_proj_description"
            type="text"
            isTextArea={true}
            onChange={onChange}
            state={state}
          />
        </div>
        <div className={styles.buttonWrapper}>
          <Button type="reset" buttonName="Отменить" />
          <Button type="submit" buttonName="Сохранить" />
        </div>
      </form>
    );
  }
}

export default Form;
