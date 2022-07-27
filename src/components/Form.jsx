import React, { Component } from 'react';
import Input                from './InputField';
import TextArea             from './TextArea';
import styles               from './Form.module.css';


export class Form extends Component {

    constructor( props ){
        super( props );
        this.initialState = {
            firstName:      "",
            lastName:       "",
            birthday:       "",
            phone:          "",
            url:            "",
            aboutUser:      "",
            stack:          "",
            lastProject:    "",
            errors:         {
                firstName:      "",
                lastName:       "",
                birthday:       "",
                phone:          "",
                url:            "",
                aboutUser:      "",
                stack:          "",
                lastProject:    "",
            },
            counters:       {
                aboutUser:      600,
                stack:          600,
                lastProject:    600,
            }
        }
        this.state      = this.initialState;
        this.person     = this.props.person;
        this.isData     = this.props.isData;
        this.resetForm  = this.resetForm.bind(this);
        this.onSubmit   = this.onSubmit.bind(this);
        this.onChange   = this.onChange.bind(this);

    }
    
    onChange = ( e ) => {
        const fieldName  = e.target.name;
        const counters   = this.state.counters;
        const errors     = this.state.errors;
        const countValue = 600 - e.target.value.length;

        errors[fieldName] = ""; 

        this.setState({ [e.target.name] : e.target.value });
        if ( e.target.type === "tel" ) {
            const matchedString = e.target.value.replace(/\D/g, "").match(/(\d{0,1})(\d{0,4})(\d{0,2})(\d{0,2})/);
            e.target.value = !matchedString[2] ? matchedString[1] 
                : matchedString[1] + "-" + matchedString[2] 
                + (matchedString[3] ? "-" + matchedString[3] : "") 
                + (matchedString[4] ? "-" + matchedString[4] : "");
        }
        if ( e.target.className === styles.textArea ) counters[fieldName] = countValue;
    }

    formValidation = ( e ) => {
        let isValid     = true;
        const state     = this.state;
        const errors    = this.state.errors;

        for( let i in state ) {
            if ( state[i] < 1 ) errors[i] = "Поле пустое. Заполните пожалуйста" 
            else if (( i === "firstName" || i === "lastName" ) && state[i].trim().charAt(0) !== state[i].charAt(0).toUpperCase() ){
                errors[i] = "Используйте заглавную букву для написания первого символа"
            } else if ( i === "phone" && state[i].trim() === state[i].trim().replace(/^[0-9]{1}-[0-9]{4}-[0-9]{2}-[0-9]{2}$/,'')){
                errors[i] = 'Введите номер согласно шаблону "7-7777-77-77"';
            } else if ( i === "url" && state[i].trim() === state[i].trim().replace(/^https:\/\//,'')){
                errors[i] = 'Введите url согласно шаблону "https://..."';
            }  else if ( state[i].length > 600 ){
                errors[i] = " ";
            } else errors[i] = ""  
            this.setState({ errors, [i]: state[i] })
        }

        Object.values(errors).forEach(( val ) => {
            if( val.length > 0 ) return isValid = false
        });
        return isValid;
    }

    onSubmit = ( e ) => {
        this.isData = this.formValidation();
        if ( this.isData ) {
            this.setState( this.initialState );
            this.person = this.state;
        }
        const isData = this.isData;
        const person = this.person;
        this.props.changeData({ isData, person });
        e.preventDefault();
    }

    resetForm(){ 
        this.setState( this.initialState )        
        for ( let i in this.state.counters ){ this.state.counters[i] = 600 } 
    }

    render() {
        const { firstName, lastName, birthday, phone, url, aboutUser, stack, lastProject, errors, counters } = this.state;
        const FORM_TITLE = "Создание анкеты";

        return (
                <form 
                    className   = { this.props.className }
                    onSubmit    = { this.onSubmit } 
                >
                    <legend className = { styles.titleForm }>{ FORM_TITLE }</legend>
                    <Input 
                        label       = "Имя"
                        placeholder = "Введите свое имя"
                        name        = "firstName"
                        value       = { firstName }
                        onChange    = { this.onChange }
                        error       = { errors }
                    />
                    <Input 
                        label       = "Фамилия"
                        placeholder = "Введите свою фамилию"
                        name        = "lastName"
                        value       = { lastName }
                        onChange    = { this.onChange }
                        error       = { errors }
                    />
                    <Input 
                        type        = "date" 
                        label       = "Дата рождения"
                        name        = "birthday"
                        value       = { birthday }
                        onChange    = { this.onChange }
                        error       = { errors }
                    />
                    <Input 
                        type        = "tel" 
                        label       = "Телефон"
                        placeholder = "Введите свой номер телефона"
                        name        = "phone"
                        value       = { phone }
                        onChange    = { this.onChange }
                        maxLength   = "12"
                        error       = { errors }
                    />
                    <Input 
                        type        = "url" 
                        label       = "Сайт"
                        placeholder = "Введите ссылку на сайт"
                        name        = "url"
                        value       = { url }
                        onChange    = { this.onChange }
                        error       = { errors }
                    />
                    <TextArea 
                        label       = "О себе" 
                        placeholder = "Введите информацию о себе"
                        name        = "aboutUser"
                        value       = { aboutUser }
                        onChange    = { this.onChange }
                        error       = { errors }
                        counters    = { counters }
                    />
                    <TextArea 
                        label       = "Стек технологий"
                        placeholder = "Введите используемый стек технологий"
                        name        = "stack"
                        value       = { stack }
                        onChange    = { this.onChange }
                        error       = { errors }
                        counters    = { counters }
                    />
                    <TextArea 
                        label       = "Описание последнего проекта"
                        placeholder = "Введите описание последнего проекта"
                        name        = "lastProject"
                        value       = { lastProject }
                        onChange    = { this.onChange }
                        error       = { errors }
                        counters    = { counters }
                    />
                    <Input 
                        type        = "reset"  
                        valueButton = "Отмена" 
                        onClick     = { this.resetForm }
                    />
                    <Input type = "submit" valueButton = "Сохранить"/>                
                </form>
        )
    }
}

export default Form;