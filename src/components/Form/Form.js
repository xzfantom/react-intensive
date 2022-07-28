import React, { Component } from "react";
import CustomInput from "../CustomInput/CustomInput";
import CustomTextarea from "../CustomTextarea/CustomTextarea";
import s from "./Form.module.css";

class Form extends Component {
  state = {
    header: "",
    userName: "",
    userSurname: "",
    berthDate: "",
    userPhone: "",
    userWeb: "",
    userAbout: "",
    userSteak: "",
    projectDescrip: "",
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onChange1 = (e) => {
    this.setState({ projectDescrip: e.target.value });
  };
  onSubmit = (e) => {
    e.preventDefault();
    this.setState({
      userName: "",
      userSurname: "",
    });
  };
  selectState = (e) => {
    this.setState({ berthDate: e.target.value });
  };

  render() {
    const { userName, userSurname, berthDate, userPhone, userWeb } = this.state;
    return (
      <div>
        <form className={s.form} onSubmit={this.onSubmit}>
          <label>Имя: </label>
          <CustomInput
            type="text"
            value={userName}
            placeholder="Имя"
            onChange={this.onChange}
            name="userName"
          />

          <label>Фамилия:</label>
          <CustomInput
            type="text"
            value={userSurname}
            placeholder="Фамилия"
            onChange={this.onChange}
            name="userSurname"
          />

          <label>Дата рождения: </label>
          <CustomInput
            type="date"
            value={berthDate}
            onChange={this.selectState}
            name="userDate"
          />

          <label>Телефон: </label>
          <CustomInput
            type="tel"
            value={userPhone}
            placeholder="380(99)-999-99-99"
            onChange={this.onChange}
            name="userPhone"
          />

          <label>Сайт: </label>
          <CustomInput
            type="text"
            value={userWeb}
            placeholder="Сайт"
            onChange={this.onChange}
            name="userWeb"
          />

          <label>О себе: </label>

          <CustomTextarea
            rows="7"
            placeholder="О себе"
            onChange={this.onChange}
            name="userAbout"
            state={this.state}
            value={this.state.userAbout}
          ></CustomTextarea>

          <label>Стек технологий: </label>

          <CustomTextarea
            rows="7"
            placeholder="Стек технологий"
            name="userSteak"
            onChange={this.onChange}
            state={this.state}
            value={this.state.userSteak}
          ></CustomTextarea>

          <label>Описание последнего проекта: </label>
          <CustomTextarea
            rows="7"
            placeholder="Описание последнего проекта"
            onChange={this.onChange1}
            name="userDesr"
            state={this.state}
            value={this.state.projectDescrip}
          ></CustomTextarea>

          <div className={s.buttons}>
            <button> Отмена</button>
            <button type="submit"> Сохранить</button>
          </div>
        </form>
      </div>
    );
  }
}

export default Form;
