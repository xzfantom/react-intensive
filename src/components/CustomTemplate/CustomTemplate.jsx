import React from "react";
import s from './CustomTemplate.module.css'

export class CustomTemplate extends React.Component {
    render() {
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
        } = this.props;
        return (
            <div className="wrapper">
                <div className={s.tamplate}>
                    <h1 className="header">
                        {firstName} {lastName}
                    </h1>
                    <ul>
                        <li>Дата рождения: <br/> {date}</li>
                        <li>Номер телефона: <br/>{phone}</li>
                        <li>Сайт:<br/> {link}</li>
                        <li>О себе:<br/> {about}</li>
                        <li>Стек технологий:<br/> {stack}</li>
                        <li>Описание последнего проекта:<br/> {project}</li>
                    </ul>
                </div>
                <div className={s.btnWrap}>
                    <button type="back" onClick={backToForm}>
                        Back to form
                    </button>
                </div>
            </div>
        );
    }
}
