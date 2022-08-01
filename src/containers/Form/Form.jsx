import React, { useEffect, useState } from "react";
import style from "./form.module.css";
import Input from "../../components/Input/Input";
import TextArea from "../../components/TextArea/TextArea";
import { formDefault, defaultFalseValues } from "../../utils/initialFormState";
import validateForm from "../../utils/validateFormValues";

const Form = (props) => {
  const [values, setValues] = useState(formDefault);
  const [formErrors, setFormErrors] = useState(formDefault);
  const [touched, setTouched] = useState(defaultFalseValues);
  const [empties, setEmpties] = useState(defaultFalseValues);

  useEffect(() => {
    setFormErrors(validateForm(values));
  }, [values]);

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
    setEmpties({
      ...empties,
      [event.target.name]: false,
    });
  };

  const handleBlur = (event) => {
    setTouched({
      ...touched,
      [event.target.name]: true,
    });
  };

  const handleCancelClick = (event) => {
    event.preventDefault();
    setValues(formDefault);
    setFormErrors(formDefault);
    setTouched(defaultFalseValues);
    setEmpties(defaultFalseValues);
  };

  const handleSaveClick = (event) => {
    event.preventDefault();
    const allFilled = Object.values(values).every(
      (value) => value.trim() !== ""
    );
    const noErrors = Object.values(formErrors).every(
      (error) => error.length === 0
    );

    if (!allFilled) {
      const emptyOnes = Object.entries(values).reduce((prev, current) => {
        if (current[1].trim() === "") {
          prev[current[0]] = true;
        }
        return prev;
      }, {});
      setEmpties({ ...empties, ...emptyOnes });
    }

    if (allFilled && noErrors) {
      props.readyForm(values);
    }
  };

  return (
    <div className={style.container}>
      <form className={style.form}>
        <h2 className={style.title}>Создание анкеты</h2>

        <Input
          type="text"
          text="Имя"
          name="name"
          value={values.name}
          error={formErrors.name}
          touched={touched.name}
          handleChange={handleChange}
          handleBlur={handleBlur}
          empty={empties.name}
        />

        <Input
          type="text"
          text="Фамилия"
          name="surname"
          value={values.surname}
          error={formErrors.surname}
          touched={touched.surname}
          handleChange={handleChange}
          handleBlur={handleBlur}
          empty={empties.surname}
        />

        <Input
          type="date"
          text="Дата Рождения"
          name="birthDate"
          value={values.birthDate}
          error={formErrors.birthDate}
          touched={touched.birthDate}
          handleChange={handleChange}
          handleBlur={handleBlur}
          empty={empties.birthDate}
        />

        <Input
          type="tel"
          text="Телефон"
          name="phone"
          value={values.phone}
          error={formErrors.phone}
          touched={touched.phone}
          handleChange={handleChange}
          handleBlur={handleBlur}
          empty={empties.phone}
        />

        <Input
          type="text"
          text="Сайт"
          name="website"
          value={values.website}
          error={formErrors.website}
          touched={touched.website}
          handleChange={handleChange}
          handleBlur={handleBlur}
          empty={empties.website}
        />

        <TextArea
          rows={7}
          text="О себе"
          name="about"
          value={values.about}
          error={formErrors.about}
          touched={touched.about}
          handleChange={handleChange}
          empty={empties.about}
        />

        <TextArea
          rows={7}
          text="Стек технологий"
          name="technologies"
          value={values.technologies}
          error={formErrors.technologies}
          touched={touched.technologies}
          handleChange={handleChange}
          empty={empties.technologies}
        />

        <TextArea
          rows={7}
          text="Описание последнего проекта"
          name="lastProject"
          value={values.lastProject}
          error={formErrors.lastProject}
          touched={touched.lastProject}
          handleChange={handleChange}
          empty={empties.lastProject}
        />

        <div className={style.buttonContainer}>
          <button
            onClick={handleCancelClick}
            className={`${style.button} ${style.cancel}`}
          >
            Отмена
          </button>

          <button
            onClick={handleSaveClick}
            className={`${style.button} ${style.submit}`}
            type="submit"
          >
            Сохранить
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
