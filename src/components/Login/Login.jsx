import React, { useState } from 'react';
import styles from './login.module.css';
import Form from "../Form/Form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ADD_LOGIN } from "../../redux/actionsTypes";

const Login = () => {
    const BUTTON_NAME = "Сохранить";
    const INPUT_PLACEHOLDER = "Ваше имя";
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [ name, setName ] = useState("")
    const onChange = ( e ) => { setName( e.target.value ) }
    const onSubmit = ( e ) => {
        dispatch({
            type: ADD_LOGIN,
            payload: name
        });
        setName( "" )
        navigate("/todos");
        e.preventDefault();
    };
    return (
        <div className = { styles.loginWrapper }>
            <Form
                buttonName = { BUTTON_NAME }
                placeholder = { INPUT_PLACEHOLDER }
                onSubmit = { onSubmit }
                onChange = { onChange }
                value = { name }
            />
        </div>
    )
}

export default Login;