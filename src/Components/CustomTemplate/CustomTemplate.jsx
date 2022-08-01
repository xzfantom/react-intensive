import React from "react";
import s from "./CustomTemplate.module.css";
import {Link, NavLink} from "react-router-dom";

const CustomTemplate = (props) => {
    const {
        firstName,
        lastName,
        date,
        phone,
        link,
        about,
        stack,
        project,
        backToForm,
    } = props;

    return (

        <div className="wrapper">
            <div className={s.template}>
                <h1 className={s.header}>
                    {firstName} {lastName}
                </h1>
                <ul>
                    <li>Дата рождения:  {date} </li>
                    <li>Номер телефона: {phone}</li>
                    <li>Сайт: {link}</li>
                    <li>О себе: {about}</li>
                    <li>Стек технологий: {stack}</li>
                    <li>Описание последнего проекта: {project}</li>
                </ul>

            </div>
            <div className={s.btnWrap}>
                <button type="back" onClick={backToForm}>
                    Back to form
                </button>
            </div>
        </div>

    );
};
export default CustomTemplate;
