import React, { Component } from "react";
import style from "./form.module.css";
import Input from "../../components/Input/Input";
import TextArea from "../../components/TextArea/TextArea";
import {
  formDefault,
  formDefaultFalseProp,
} from "../../utils/initialFormState";
import validateForm from "../../utils/validateFormValues";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      values: formDefault,
      errors: formDefault,
      touched: formDefaultFalseProp,
      empties: formDefaultFalseProp,
    };
  }

  handleChange = (event) => {
    const targetInput = event.target.name;
    const targetValue = event.target.value;

    this.setState({
      errors: validateForm({
        ...this.state.values,
        ...{ [targetInput]: targetValue },
      }),
    });

    this.setState({
      values: {
        ...this.state.values,
        [targetInput]: targetValue,
      },
      empties: {
        ...this.state.empties,
        [targetInput]: false,
      },
    });
  };

  handleBlur = (event) => {
    const targetInput = event.target.name;

    this.setState({
      touched: {
        ...this.state.touched,
        [targetInput]: true,
      },
    });
  };

  handleCancelClick = (event) => {
    event.preventDefault();
    this.setState({
      values: formDefault,
      errors: formDefault,
      touched: formDefaultFalseProp,
      empties: formDefaultFalseProp,
    });
  };

  handleSaveClick = (event) => {
    event.preventDefault();
    const allFilled = Object.values(this.state.values).every(
      (value) => value.trim() !== ""
    );
    const noErrors = Object.values(this.state.errors).every(
      (error) => error.length === 0
    );

    if (!allFilled) {
      const emptyOnes = Object.entries(this.state.values).reduce(
        (prev, current) => {
          if (current[1].trim() === "") {
            prev[current[0]] = true;
          }
          return prev;
        },
        {}
      );
      this.setState({
        empties: { ...this.state.empties, ...emptyOnes },
      });
    }

    if (allFilled && noErrors) {
      this.props.readyForm(this.state.values);
    }
  };

  render() {
    const {
      name,
      surname,
      birthDate,
      phone,
      website,
      about,
      technologies,
      lastProject,
    } = this.state.values;

    return (
      <div className={style.container}>
        <form className={style.form}>
          <h2 className={style.title}>Создание анкеты</h2>

          <Input
            type="text"
            text="Имя"
            name="name"
            value={name}
            error={this.state.errors.name}
            touched={this.state.touched.name}
            empty={this.state.empties.name}
            handleChange={this.handleChange}
            handleBlur={this.handleBlur}
          />

          <Input
            type="text"
            text="Фамилия"
            name="surname"
            value={surname}
            error={this.state.errors.surname}
            touched={this.state.touched.surname}
            empty={this.state.empties.surname}
            handleChange={this.handleChange}
            handleBlur={this.handleBlur}
          />

          <Input
            type="date"
            text="Дата Рождения"
            name="birthDate"
            value={birthDate}
            error={this.state.errors.birthDate}
            touched={this.state.touched.birthDate}
            empty={this.state.empties.birthDate}
            handleChange={this.handleChange}
            handleBlur={this.handleBlur}
          />

          <Input
            type="tel"
            text="Телефон"
            name="phone"
            value={phone}
            error={this.state.errors.phone}
            touched={this.state.touched.phone}
            empty={this.state.empties.phone}
            handleChange={this.handleChange}
            handleBlur={this.handleBlur}
          />

          <Input
            type="text"
            text="Сайт"
            name="website"
            value={website}
            error={this.state.errors.website}
            touched={this.state.touched.website}
            empty={this.state.empties.website}
            handleChange={this.handleChange}
            handleBlur={this.handleBlur}
          />

          <TextArea
            rows={7}
            text="О себе"
            name="about"
            value={about}
            error={this.state.errors.about}
            empty={this.state.empties.about}
            handleChange={this.handleChange}
          />

          <TextArea
            rows={7}
            text="Стек технологий"
            name="technologies"
            value={technologies}
            error={this.state.errors.technologies}
            empty={this.state.empties.technologies}
            handleChange={this.handleChange}
          />

          <TextArea
            rows={7}
            text="Описание последнего проекта"
            name="lastProject"
            value={lastProject}
            error={this.state.errors.lastProject}
            empty={this.state.empties.lastProject}
            handleChange={this.handleChange}
          />

          <div className={style.buttonContainer}>
            <button
              onClick={this.handleCancelClick}
              className={`${style.button} ${style.cancel}`}
            >
              Отмена
            </button>

            <button
              onClick={this.handleSaveClick}
              className={`${style.button} ${style.submit}`}
              type="submit"
            >
              Сохранить
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Form;
