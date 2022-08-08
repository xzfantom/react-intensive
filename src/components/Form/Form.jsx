import React, { useState } from 'react';
import styles from './form.module.css';
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Form = ({ type }) => {
    const BUTTON_NAME = {
        add: "Добавить",
        login: "Сохранить"
    };
    const INPUT_PLACEHOLDER = {
        add: "Введите новую задачу",
        login: "Ваше имя"
    }
    const dispatch = useDispatch();
    const [ newTodo, setNewTodo ] = useState("");
    const [ name, setName ] = useState("")
    const navigate = useNavigate();

    const onChange = ( e ) => {
        ( type === "todo" ) ? setNewTodo( e.target.value ) : setName( e.target.value )
    }

    const onAddTask = () => dispatch({
        type: "ADD_TODO",
        payload: newTodo
    });
    const onLogin = () => {
        dispatch({
            type: "ADD_LOGIN",
            payload: name
        });
        navigate("/todos");
    }
    const onSubmit = ( e ) => {
        setNewTodo("")
        setName("")
        e.preventDefault();
    };

    return (
        <form onSubmit = { onSubmit } className = { styles.formWrapper }>
            <input
                type = "text"
                placeholder = { (type === "todo") ? INPUT_PLACEHOLDER.add : INPUT_PLACEHOLDER.login }
                className = { styles.inputField }
                onChange = { onChange }
                value = { (type === "todo") ? newTodo : name }
            />
            <button
                type = "submit"
                className = { styles.submit }
                onClick = {
                    (( type === "todo" ) && newTodo) ? onAddTask
                    : (( type === "login" ) && name) ? onLogin : undefined
                }
            >
                {( type === "todo" ) ? BUTTON_NAME.add : BUTTON_NAME.login }
            </button>
        </form>
    );
};

export default Form;