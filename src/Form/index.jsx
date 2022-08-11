import React from 'react';
import styles from './index.module.css';
import Input from '../Input';
import Button from '../Button';

const Form = (props) => {
  const { handleSubmit, handleFormReset, onChange, inputs, errors, isProfileShown } = props;
  return (
    <div>
      <div className={styles.headingWrapper}>
        {isProfileShown && (
          <h1 className={styles.header}>
            <div>{inputs.firstName}</div>
            <div>{inputs.lastName}</div>
          </h1>
        )}
        {!isProfileShown && <h1 className={styles.header}>Создание анкеты</h1>}
      </div>
      <section className={styles.mainContent}>
        <form onSubmit={handleSubmit} className={styles.formWrapper} onChange={onChange}>
          <div className={styles.groupedInputsWrapper}>
            <Input
              inputLabel="Имя"
              name="firstName"
              type="text"
              onChange={onChange}
              inputs={inputs}
              errors={errors}
              isProfileShown={isProfileShown}
            />
            <Input
              inputLabel="Фамилия"
              name="lastName"
              type="text"
              onChange={onChange}
              inputs={inputs}
              errors={errors}
              isProfileShown={isProfileShown}
            />
            <Input
              inputLabel="Дата рождения"
              name="date_of_birth"
              type="date"
              onChange={onChange}
              inputs={inputs}
              errors={errors}
              isProfileShown={isProfileShown}
            />
            <Input
              inputLabel="Телефон"
              name="telephone"
              type="tel"
              placeholder="9-9999-99-99"
              onChange={onChange}
              inputs={inputs}
              errors={errors}
              isProfileShown={isProfileShown}
            />
            <Input
              inputLabel="Сайт"
              name="web_site"
              type="url"
              placeholder="https://..."
              onChange={onChange}
              inputs={inputs}
              errors={errors}
              isProfileShown={isProfileShown}
            />
            <Input
              inputLabel="О себе"
              name="about"
              type="text"
              isTextArea={true}
              onChange={onChange}
              inputs={inputs}
              errors={errors}
              isProfileShown={isProfileShown}
            />
            <Input
              inputLabel="Стек технологий"
              name="skills"
              type="text"
              isTextArea={true}
              onChange={onChange}
              inputs={inputs}
              errors={errors}
              isProfileShown={isProfileShown}
            />
            <Input
              inputLabel="Описание последнего проекта"
              name="last_project_description"
              type="text"
              isTextArea={true}
              onChange={onChange}
              inputs={inputs}
              errors={errors}
              isProfileShown={isProfileShown}
            />
          </div>
          {!isProfileShown && (
            <div className={styles.buttonWrapper}>
              <Button buttonName="Отменить" onClick={handleFormReset} />
              <Button type="submit" buttonName="Сохранить" />
            </div>
          )}
        </form>
      </section>
    </div>
  );
};

export default Form;
