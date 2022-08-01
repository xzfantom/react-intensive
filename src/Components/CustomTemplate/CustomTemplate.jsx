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
                <header className={s.header}>
                    {firstName} {lastName}
                </header>
                <h4>Дата рождения: {date} </h4>
                <h4>Номер телефона: {phone} </h4>
                <h4>Сайт: {link} </h4>
                <h4>О себе: {about} </h4>
                <h4>Стек технологий: {stack} </h4>
                <h4>Описание последнего проекта: {project} </h4>
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
