import React, { useState } from 'react';
import Input from '../InputField/InputField';
import TextArea from '../TextArea/TextArea';
import styles from './form.module.css';


function Form ({ isData, changeData, className }) {
    const FORM_TITLE = "Создание анкеты";
    const TEXT_ERROR = {
        emptyValue: "Поле пустое. Заполните пожалуйста",
        firstLetter: "Используйте заглавную букву для написания первого символа",
        phonePattern: 'Введите номер согласно шаблону "7-7777-77-77"',
        emailPattern: 'Введите url согласно шаблону "https://..."',
        dateValue: "Ваш возраст должен быть более 1 года и менее 122 лет"
    };
    const REG_EXP = {
        phoneReplacePattern: /(\d{0,1})(\d{0,4})(\d{0,2})(\d{0,2})/,
        phoneCheckPattern: /^[0-9]{1}-[0-9]{4}-[0-9]{2}-[0-9]{2}$/,
        emailCheckPattern: /^https:\/\//,
    };
    const initialPerson = {
        firstName: "",
        lastName: "",
        birthday: "",
        phone: "",
        url: "",
        aboutUser: "",
        stack: "",
        lastProject: "",
    }
    const initialCounter = {
        aboutUser: 600,
        stack: 600,
        lastProject: 600,
    }
    const [ person, setPerson ] = useState( initialPerson );
    const [ errors, setErrors ] = useState({} );
    const [ counters, setCounters ] = useState( initialCounter );

    const onChange = ( e ) => {
        const fieldName = e.target.name;
        setErrors({...errors, [ fieldName ] : "" })

        if ( e.target.type === "tel" ) {
            const matchedString = e.target.value.replace(/\D/g, "").match(REG_EXP.phoneReplacePattern);
            e.target.value = !matchedString[2] ? matchedString[1] 
                : matchedString[1] + "-" + matchedString[2] 
                + (matchedString[3] ? "-" + matchedString[3] : "") 
                + (matchedString[4] ? "-" + matchedString[4] : "");
        }
        if ( e.target.type === "textarea" ) counters[ fieldName ] = 600 - e.target.value.length;
        if ( e.target.type === "text"
            && e.target.value.trim().charAt(0) !== e.target.value.charAt(0).toUpperCase()) {
            setErrors({...errors, [ fieldName ] : TEXT_ERROR.firstLetter })
        }
        if ( e.target.type === "date" ){
            const selectDate = new Date(e.target.value)
            if (selectDate.getFullYear() >= 2022 || selectDate.getFullYear() < 1900) {
                setErrors({...errors, [ fieldName ] : TEXT_ERROR.dateValue })
            }
        }
        setPerson({...person, [ fieldName ] : e.target.value })
    }

    const formValidation = ( e ) => {
        let isValid = true;
        let errorsArray = errors;

        for( let i in person ) {
            if ( !person[i] ) {
                errorsArray[i] = TEXT_ERROR.emptyValue;
            } else if (( i === "firstName" || i === "lastName" )
                && person[i].trim().charAt(0) !== person[i].charAt(0).toUpperCase() ){
                errorsArray[i] = TEXT_ERROR.firstLetter;
            } else if ( i === "phone" && person[i].trim() === person[i].trim().replace(REG_EXP.phoneCheckPattern,'')){
                errorsArray[i] = TEXT_ERROR.phonePattern;
            } else if ( i === "url" && person[i].trim() === person[i].trim().replace(REG_EXP.emailCheckPattern,'')){
                errorsArray[i] = TEXT_ERROR.emailPattern;
            } else if ( i === "birthday") {
                const selectDate = new Date(person[i])
                if ((selectDate.getFullYear() >= 2022 || selectDate.getFullYear() < 1900)) errorsArray[i] = TEXT_ERROR.dateValue;
            } else if ( person[i].length > 600 ){
                errorsArray[i] = " ";   // this error exists to prevent submit form, when the maximum value is exceeded (checked and render by TextArea)
            } else errorsArray[i] = ""; 
        }
        setErrors({...errors}, errorsArray)
        isValid = !Object.values(errors).some((value) => !!value);
        return isValid;
    }

    const onSubmit = ( e ) => {
        isData = formValidation();
        if ( isData ) { 
            changeData({ isData, person });
            resetForm() 
        }
        e.preventDefault();
    }

    const resetForm = () => { 
        setPerson({ ...initialPerson });
        setErrors({ });
        setCounters({ ...initialCounter });
    }

    const { firstName, lastName, birthday, phone, url, aboutUser, stack, lastProject } = person;

    return (
        <form 
            className = { className }
            onSubmit = { onSubmit }
        >
            <legend className = { styles.titleForm }>{ FORM_TITLE }</legend>
            <Input 
                label = "Имя"
                placeholder = "Введите свое имя"
                name = "firstName"
                value = { firstName }
                onChange = { onChange }
                error = { errors.firstName }
            />
            <Input 
                label = "Фамилия"
                placeholder = "Введите свою фамилию"
                name = "lastName"
                value = { lastName }
                onChange = { onChange }
                error = { errors.lastName }
            />
            <Input 
                type = "date"
                label = "Дата рождения"
                name = "birthday"
                value = { birthday }
                onChange = { onChange }
                error = { errors.birthday }
            />
            <Input 
                type = "tel"
                label = "Телефон"
                placeholder = "Введите свой номер телефона"
                name = "phone"
                value = { phone }
                onChange = { onChange }
                maxLength = "12"
                error = { errors.phone }
            />
            <Input 
                type = "url"
                label = "Сайт"
                placeholder = "Введите ссылку на сайт"
                name = "url"
                value = { url }
                onChange = { onChange }
                error = { errors.url }
            />
            <TextArea 
                label = "О себе"
                placeholder = "Введите информацию о себе"
                name = "aboutUser"
                value = { aboutUser }
                onChange = { onChange }
                error = { errors.aboutUser }
                counter = { counters.aboutUser }
            />
            <TextArea 
                label = "Стек технологий"
                placeholder = "Введите используемый стек технологий"
                name = "stack"
                value = { stack }
                onChange = { onChange }
                error = { errors.stack }
                counter = { counters.stack }
            />
            <TextArea 
                label = "Описание последнего проекта"
                placeholder = "Введите описание последнего проекта"
                name = "lastProject"
                value = { lastProject }
                onChange = { onChange }
                error = { errors.lastProject }
                counter = { counters.lastProject }
            />
            <Input 
                type = "reset"
                valueButton = "Отмена" 
                onClick = { resetForm }
            />
            <Input type = "submit" valueButton = "Сохранить"/>                
        </form>
    )
}

export default Form