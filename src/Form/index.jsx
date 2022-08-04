import React from 'react';
import styles from './index.module.css';
import Input from '../Input';
import Button from '../Button';

class Form extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { handleSubmit, handleFormReset, onChange, state } = this.props;

    return (
      <div>
        <div className={styles.headingWrapper}>
          <h1>Создание анкеты</h1>
        </div>
        <section className={styles.mainContent}>
          <form onSubmit={handleSubmit} className={styles.formWrapper} onChange={onChange}>
            <div className={styles.groupedInputsWrapper}>
              <Input
                inputLabel="Имя"
                name="firstName"
                type="text"
                onChange={onChange}
                state={state}
              />
              <Input
                inputLabel="Фамилия"
                name="lastName"
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
                name="telephone"
                type="tel"
                placeholder="9-9999-99-99"
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
                name="last_project_description"
                type="text"
                isTextArea={true}
                onChange={onChange}
                state={state}
              />
            </div>
            <div className={styles.buttonWrapper}>
              <Button buttonName="Отменить" onClick={handleFormReset} />
              <Button type="submit" buttonName="Сохранить" />
            </div>
          </form>
        </section>
      </div>
    );
  }
}

export default Form;
