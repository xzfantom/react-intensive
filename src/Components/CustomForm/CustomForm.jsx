import React, {useState} from "react";
import CustomInput from "../CustomInput/CustomInput";
import CustomTextarea from "../CustomTextarea/CustomTextarea";
import {validatePhone} from "../../utils/utils";
import s from "./CustomForm.module.css";

const maxLength = 600;
const CustomForm = (props) => {
    const [state, setState] = useState({
        firstName: "",
        lastName: "",
        date: "",
        phone: "",
        link: "",
        header: "",
        userAbout: "",
        userStack: "",
        projectDescrip: "",
        errors: {},
        submitted: false,
        length: 0,
        length2: 0,
        length3: 0,
    });

    const validatePhone1 = (event) => {
        return setState({
            ...state,
            phone: validatePhone(event.target.value),
        });
    };
    const calculateChar = (e) => {
        const {value, name} = e.target;
        if (name === "userAbout") {
            setState({
                ...state,
                length: (state.length = value.length || 0),
                [name]: value,
            });

            if (value.length > maxLength) {
                setState({
                    ...state,
                    error: (state.error = "Превышен лимит символов в поле"),
                });
            } else if (value.length === 0) {
                setState({
                    ...state,
                    error: (state.error = "Поле пустое. Заполните пожалуйста"),
                });
            } else if (value.length <= maxLength) {
                setState({
                    ...state,
                    error: (state.error = ""),
                });
            }
        }

        if (name === "userStack") {
            setState({
                ...state,
                length2: (state.length2 = value.length),
                [name]: value,
            });

            if (value.length > maxLength) {
                setState({
                    ...state,
                    error2: (state.error2 = "Превышен лимит символов в поле"),
                    length2: state.length2,
                });
            } else if (value.length === 0) {
                setState({
                    ...state,
                    error2: (state.error2 = "Поле пустое. Заполните пожалуйста"),
                    length2: state.length2,
                });
            } else if (value.length <= maxLength) {
                setState({
                    ...state,
                    error2: (state.error2 = ""),
                    length2: state.length2,
                });
            }
        }
        if (name === "projectDescrip") {
            setState({
                ...state,
                length3: (state.length3 = value.length),
                [name]: value,
            });

            if (value.length > maxLength) {
                setState({
                    ...state,
                    error3: (state.error3 = "Превышен лимит символов в поле"),
                });
            } else if (value.length === 0) {
                setState({
                    ...state,
                    error3: (state.error3 = "Поле пустое. Заполните пожалуйста"),
                });
            } else if (value.length <= maxLength) {
                setState({
                    ...state,
                    error3: (state.error3 = ""),
                });
            }
        }
        setState({
            ...state,
            [name]: value,
        });
    };
    const handleChange = (e) => {
        e.preventDefault();
        const {name, value} = e.target;

        setState({
            ...state,
            [name]: value,
        });
    };

    const isEmpty = (e) => {
        let errors = state.errors;
        if (state.firstName.length === 0) {
            errors.firstName = "Поле пустое. Заполните пожалуйста";
        } else if (state.firstName[0] !== state.firstName[0].toUpperCase()) {
            errors.firstName = "Имя должно начинаться с большой буквы";
        } else if (state.firstName.length > 0 && state.firstName[0].toUpperCase()) {
            delete errors.firstName;
        }
        if (state.lastName.length === 0) {
            errors.lastName = "Поле пустое. Заполните пожалуйста";
        } else if (state.lastName[0] !== state.lastName[0].toUpperCase()) {
            errors.lastName = "Имя должно начинаться с большой буквы";
        } else if (state.lastName.length > 0 && state.lastName[0].toUpperCase()) {
            delete errors.lastName;
        }
        if (state.link.length === 0) {
            errors.link = "Поле пустое. Заполните пожалуйста";
        } else if (!state.link.includes("https://")) {
            errors.link = "Поле должно начинаться с https://";
        } else if (state.link.includes("https://")) {
            delete errors.link;
        }
        if (state.date.length === 0) {
            errors.date = "Поле пустое. Заполните пожалуйста";
        } else if (state.date.length === 10) {
            delete errors.date;
        }
        if (state.phone.length === 0) {
            errors.phone = "Поле пустое. Заполните пожалуйста";
        } else if (state.phone.length === 12) {
            delete errors.phone;
        }
        if (state.userAbout.length === 0) {
            errors.userAbout = "Поле пустое. Заполните пожалуйста";
        } else if (state.projectDescrip.length > 0) {
            delete errors.userAbout;
        }

        if (state.userStack.length === 0) {
            errors.userStack = "Поле пустое. Заполните пожалуйста";
        } else if (state.projectDescrip.length > 0) {
            delete errors.userStack;
        }
        if (state.projectDescrip.length === 0) {
            errors.projectDescrip = "Поле пустое. Заполните пожалуйста";
        } else if (state.projectDescrip.length > maxLength) {
            errors.projectDescrip = " ";
        } else if (state.projectDescrip.length > 0) {
            delete errors.projectDescrip;
        }
        setState({
            ...state,
            errors,
        });

        if (Object.keys(errors).length === 0) {
            props.changeState(state);
        }
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        isEmpty();
    };
    const onBlur = (e) => {
        const {value, name} = e.target;
        setState({
            ...state,
            [name]: value.trim(),
        });
    };
    const cancel = () => {
        setState({
            firstName: "",
            lastName: "",
            date: "",
            phone: "",
            link: "",
            header: "",
            userAbout: "",
            userStack: "",
            projectDescrip: "",
            errors: {},
            submitted: false,
            length: 0,
            length2: 0,
            length3: 0,
        });
    };

    return (
        <div className="wrapper">
            <form className="form" onReset={cancel} onSubmit={handleSubmit}>
                <header className={s.header}>Создание анкеты</header>

                <CustomInput
                    type="text"
                    name="firstName"
                    state={state}
                    label="Имя:"
                    placeholder="Введите имя..."
                    isSubmited={state.submitted}
                    value={state.firstName}
                    onSubmit={handleSubmit}
                    onChange={handleChange}
                    onBlur={onBlur}
                />
                <div className={s.colorDiv}>{state.errors.firstName}</div>

                <CustomInput
                    type="text"
                    name="lastName"
                    state={state}
                    label="Фамилия:"
                    placeholder="Введите фамилию..."
                    isSubmited={state.submitted}
                    value={state.lastName}
                    onSubmit={handleSubmit}
                    onChange={handleChange}
                    onBlur={onBlur}
                />
                <div className={s.colorDiv}>{state.errors.lastName}</div>
                <CustomInput
                    type="date"
                    name="date"
                    state={state}
                    label="Дата рождения:"
                    isSubmited={state.submitted}
                    value={state.date}
                    onSubmit={handleSubmit}
                    onChange={handleChange}
                />
                <div className={s.colorDiv}>{state.errors.date}</div>
                <label>Телефон:</label>

                <CustomInput
                    type="phone"
                    name="phone"
                    state={state}
                    placeholder="Введите номер телефона..."
                    isSubmited={state.submitted}
                    value={state.phone}
                    onSubmit={handleSubmit}
                    onChange={validatePhone1}
                    onBlur={onBlur}
                />

                <div className={s.colorDiv}>{state.errors.phone}</div>
                <CustomInput
                    type="text"
                    name="link"
                    state={state}
                    label="Сайт:"
                    placeholder="Введите адрес сайта..."
                    isSubmited={state.submitted}
                    value={state.link}
                    onSubmit={handleSubmit}
                    onChange={handleChange}
                    onBlur={onBlur}
                />
                <div className={s.colorDiv}>{state.errors.link}</div>

                <CustomTextarea
                    rows="7"
                    name="userAbout"
                    maxLength={maxLength}
                    first={state.first}
                    length={state.length}
                    state={state}
                    label="О себе:"
                    placeholder="Напишите о себе..."
                    isSubmited={state.submitted}
                    value={state.userAbout}
                    onSubmit={handleSubmit}
                    onChange={calculateChar}
                    error={state.error}
                    onBlur={onBlur}
                />

                <div className={s.colorDiv}>{state.errors.userAbout}</div>

                <CustomTextarea
                    rows="7"
                    name="userStack"
                    maxLength={maxLength}
                    first={state.first}
                    state={state}
                    length={state.length2}
                    label="Стек технологий:"
                    placeholder="Напишите технологии..."
                    isSubmited={state.submitted}
                    value={state.userStack}
                    error={state.error2}
                    onSubmit={handleSubmit}
                    onChange={calculateChar}
                    onBlur={onBlur}
                />
                <div className={s.colorDiv}>{state.errors.userStack}</div>

                <CustomTextarea
                    rows="7"
                    name="projectDescrip"
                    maxLength={maxLength}
                    first={state.first}
                    length={state.length3}
                    state={state}
                    label="Описание последнего проекта:"
                    placeholder="Опишите ваш последний проект..."
                    isSubmited={state.submitted}
                    value={state.projectDescrip}
                    error={state.error3}
                    onSubmit={handleSubmit}
                    onChange={calculateChar}
                    onBlur={onBlur}
                />
                <div className={s.colorDiv}>{state.errors.projectDescrip}</div>
                <div className={s.buttons}>
                    <button type="reset">Отмена</button>
                    <button
                        type="submit"
                        onClick={() =>
                            setState({...state, submitted: !state.submitted})
                        }
                    >
                        Сохранить
                    </button>
                </div>
            </form>
        </div>
    );
};
export default CustomForm;
