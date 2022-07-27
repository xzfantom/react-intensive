import React, { Component } from 'react';
import OutputField          from './OutputField';
import OutputTextArea       from './OutputTextArea';
import styles               from './UserProfile.module.css';


class UserProfile extends Component {

    render(){
        const { firstName, lastName, birthday, phone, url, aboutUser, stack, lastProject } = this.props.person;
        const DATE_TITLE         = "Дата рождения: ";
        const PHONE_TITLE        = "Телефон: ";
        const SITE_TITLE         = "Сайт: ";
        const ABOUT_USER_TITLE   = "О себе: ";
        const STACK_TITLE        = "Стек технологий: ";
        const LAST_PROJECT_TITLE = "Описание последнего проекта: ";

        return(
            <div className = { this.props.className }>
                <OutputField 
                    className   = { styles.titleForm }
                    value       = { firstName + " " + lastName }
                />
                <OutputField    title = { DATE_TITLE }         value = { birthday }/>
                <OutputField    title = { PHONE_TITLE }        value = { phone }/>
                <OutputField    title = { SITE_TITLE }         value = { url }/>
                <OutputTextArea title = { ABOUT_USER_TITLE }   value = { aboutUser }/>
                <OutputTextArea title = { STACK_TITLE }        value = { stack }/>
                <OutputTextArea title = { LAST_PROJECT_TITLE } value = { lastProject }/>
            </div>  
        )
    }
}

export default UserProfile;