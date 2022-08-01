import React, { Component } from "react";
import style from "./profile.module.css";

class Profile extends Component {
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
    } = this.props.data;

    return (
      <div className={style.container}>
        <div className={style.profile}>
          <div className={style.title}>
            {name} {surname}
          </div>
          <p className={style.element}>
            <span className={style.element__description}>Дата рождения:</span>
            <span className={style.element__data}>{birthDate}</span>
          </p>
          <p className={style.element}>
            <span className={style.element__description}>Номер телефона:</span>
            <span className={style.element__data}>{phone}</span>
          </p>
          <p className={style.element}>
            <span className={style.element__description}>Мой сайт:</span>
            <span className={style.element__data}>{website}</span>
          </p>
          <div className={style.text}>
            <div className={style.text__description}>О себе:</div>
            <div className={style.text__data}>{about}</div>
          </div>
          <div className={style.text}>
            <div className={style.text__description}>Стек технологий:</div>
            <div className={style.text__data}>{technologies}</div>
          </div>
          <div className={style.text}>
            <div className={style.text__description}>
              Описание последнего проекта:
            </div>
            <div className={style.text__data}>{lastProject}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
