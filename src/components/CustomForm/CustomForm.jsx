import React from "react";
import CustomTextarea from "../CustomTextarea/CustomTextarea";
import CustomInput from "../CustomInput/CustomInput";
import {validatePhone} from "../../utils/utils";
import s from './CustomForm.module.css'

const maxLength = 600;

class CustomForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            date: "",
            phone: "",
            link: "",
            header: "",
            userAbout: "",
            userSteak: "",
            projectDescrip: "",
            errors: "",
            isSubmited: false,
            length: 0,
            length2: 0,
            length3: 0,
        };

    }

    validatePhone1 = (event) => {
        return this.setState({
            ...this.state,
            phone: validatePhone(event.target.value),
        });
    };
    calculateChar = (e) => {
        e.preventDefault();
        this.setState({[e.target.name]: e.target.value});
        const {value, name} = e.target;

        if (name === "userAbout") {
            this.setState({length: e.target.value.length});
            if (value.length > maxLength) {
                this.setState({
                    error: "Превышен лимит символов в поле",
                });
            } else if (value.length === 0) {
                this.setState({
                    error: "Поле пустое. Заполните пожалуйста",
                });
            } else if (value.length <= maxLength) {
                this.setState({
                    error: "",
                });
            }
        }

        if (name === "userSteak") {
            this.setState({length2: e.target.value.length});
            if (value.length > maxLength) {
                this.setState({
                    error2: "Превышен лимит символов в поле",
                });
            } else if (value.length === 0) {
                this.setState({
                    error2: "Поле пустое. Заполните пожалуйста",
                });
            } else if (value.length <= maxLength) {
                this.setState({
                    error2: "",
                });
            }
        }
        if (name === "projectDescrip") {
            this.setState({length3: e.target.value.length});
            if (value.length > maxLength) {
                this.setState({
                    error3: "Превышен лимит символов в поле",
                });
            } else if (value.length === 0) {
                this.setState({
                    error3: "Поле пустое. Заполните пожалуйста",
                });
            } else if (value.length <= maxLength) {
                this.setState({
                    error3: "",
                });
            }
        }
    };

    validateForm = () => {
        const errors = {};
        if (this.state.firstName.length <= 0) {
            errors.nameEr = "Поле пустое. Заполните пожалуйста";
        } else if (
            this.state.firstName[0] !== this.state.firstName[0].toUpperCase()
        ) {
            errors.nameEr = "Имя должно начинаться с большой буквы";
        }
        if (this.state.lastName.length <= 0) {
            errors.surnameEr = "Поле пустое. Заполните пожалуйста";
        } else if (
            this.state.lastName[0] !== this.state.lastName[0].toUpperCase()
        ) {
            errors.surnameEr = "Фамилия должно начинаться с большой буквы";
        }
        if (this.state.phone.length <= 0) {
            errors.telEr = "Поле пустое. Заполните пожалуйста";
        } else if (this.state.phone.length < 12) {
            errors.telEr = "Телефон должен содержать 12 символов";
        }
        if (this.state.date.length <= 0) {
            errors.dateEr = "Поле пустое. Заполните пожалуйста";
        }
        if (this.state.link.length <= 0) {
            errors.linkEr = "Поле пустое. Заполните пожалуйста";
        } else if (!this.state.link.includes("https://")) {
            errors.linkEr = "Поле должно начинаться с https://";
        }
        if (this.state.projectDescrip.length <= 0) {
            errors.projectEr = "Поле пустое. Заполните пожалуйста";
        } else if (this.state.projectDescrip.length > maxLength) {
            errors.projectEr = " ";
        }
        if (this.state.userAbout.length <= 0) {
            errors.aboutEr = "Поле пустое. Заполните пожалуйста";
        } else if (this.state.userAbout.length > maxLength) {
            errors.aboutEr = " ";
        }
        if (this.state.userSteak.length <= 0) {
            errors.steakEr = "Поле пустое. Заполните пожалуйста";
        } else if (this.state.userSteak.length > maxLength) {
            errors.steakEr = " ";
        }

        this.setState({errors});

        if (Object.keys(errors).length === 0) {
            console.log(Object.keys(errors));
            this.props.changeState(this.state);
        }
    };

    onChange = (e) => {
        e.preventDefault();
        this.setState({[e.target.name]: e.target.value});
    };

    onSubmit = (e) => {
        e.preventDefault();
        this.validateForm();
    };
    onBlur = (e) => {
        this.setState({[e.target.name]: e.target.value.trim()});
    };
    onReset = (e) => {
        e.preventDefault();
        this.setState({
            firstName: "",
            lastName: "",
            date: "",
            phone: "",
            link: "",
            header: "",
            userAbout: "",
            userSteak: "",
            projectDescrip: "",
            isSubmited: false,
            errors: "",
            error: "",
            error2: "",
            error3: "",
        });
    };

    render() {
        return (
            <div className={s.wrapper}>
                <form
                    onSubmit={this.onSubmit}
                    onReset={this.onReset}
                >
                    <header className={s.header}>Создание анкеты</header>

                    <CustomInput
                        type="text"
                        name="firstName"
                        state={this.state}
                        label="Имя:"
                        placeholder="Введите имя..."
                        isSubmited={this.state.isSubmited}
                        value={this.state.firstName}
                        onBlur={this.onBlur}
                        onChange={this.onChange}
                    />
                    <div className={s.colorDiv}>{this.state.errors.nameEr}</div>

                    <CustomInput
                        type="text"
                        name="lastName"
                        state={this.state}
                        label="Фамилия:"
                        placeholder="Введите фамилию..."
                        isSubmited={this.state.isSubmited}
                        value={this.state.lastName}
                        onBlur={this.onBlur}
                        onChange={this.onChange}
                    />
                    <div className={s.colorDiv}>{this.state.errors.surnameEr}</div>

                    <CustomInput
                        type="date"
                        name="date"
                        state={this.state}
                        label="Дата рождения:"
                        isSubmited={this.state.isSubmited}
                        value={this.state.date}
                        onBlur={this.onBlur}
                        onChange={this.onChange}
                    />
                    <div className={s.colorDiv}>{this.state.errors.dateEr}</div>
                    <label>Телефон:</label>

                    <CustomInput
                        type="phone"
                        name="phone"
                        state={this.state}
                        placeholder="Введите номер телефона..."
                        isSubmited={this.state.isSubmited}
                        value={this.state.phone}
                        onChange={this.validatePhone1}
                    />

                    <div className={s.colorDiv}>{this.state.errors.telEr}</div>

                    <CustomInput
                        type="text"
                        name="link"
                        state={this.state}
                        label="Сайт:"
                        placeholder="Введите адрес сайта..."
                        isSubmited={this.state.isSubmited}
                        value={this.state.link}
                        onBlur={this.onBlur}
                        onChange={this.onChange}
                    />
                    <div className={s.colorDiv}>{this.state.errors.linkEr}</div>

                    <CustomTextarea
                        rows="7"
                        name="userAbout"
                        onChange={this.calculateChar}
                        onBlur={this.onBlur}
                        maxLength={maxLength}
                        first={this.state.first}
                        length={this.state.length}
                        state={this.state}
                        label="О себе:"
                        placeholder="Напишите о себе..."
                        isSubmited={this.state.isSubmited}
                        value={this.state.userAbout}
                        error={this.state.error}
                    />

                    <div className={s.colorDiv}>{this.state.errors.aboutEr}</div>

                    <CustomTextarea
                        rows="7"
                        name="userSteak"
                        onChange={this.calculateChar}
                        onBlur={this.onBlur}
                        maxLength={maxLength}
                        first={this.state.first}
                        state={this.state}
                        length={this.state.length2}
                        label="Стек технологий:"
                        placeholder="Напишите технологии..."
                        isSubmited={this.state.isSubmited}
                        value={this.state.userSteak}
                        error={this.state.error2}
                    />
                    <div className={s.colorDiv}>{this.state.errors.steakEr}</div>

                    <CustomTextarea
                        rows="7"
                        name="projectDescrip"
                        onBlur={this.onBlur}
                        onChange={this.calculateChar}
                        maxLength={maxLength}
                        first={this.state.first}
                        length={this.state.length3}
                        state={this.state}
                        label="Описание последнего проекта:"
                        placeholder="Опишите ваш последний проект..."
                        isSubmited={this.state.isSubmited}
                        value={this.state.projectDescrip}
                        error={this.state.error3}
                    />
                    <div className={s.colorDiv}>{this.state.errors.projectEr}</div>
                    <div className={s.buttons}>
                        <button type="reset" onClick={this.onReset}>
                            Отмена
                        </button>
                        <button
                            type="submit"
                            onClick={() => this.setState({isSubmited: true})}
                        >
                            Сохранить
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}

export default CustomForm;
