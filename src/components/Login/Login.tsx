import React, {ChangeEvent, FC, FormEvent, useState} from 'react';
import styles from './login.module.css';
import Form from "../Form/Form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { TodosActionTypes } from "../../types/actionsTypes";

const Login: FC = () => {
    const BUTTON_NAME  = "Сохранить";
    const INPUT_PLACEHOLDER  = "Ваше имя";
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [ name, setName ] = useState<string>("")
    const onChange = ( e: ChangeEvent<HTMLInputElement> ) => { setName( e.target.value ) }
    const onSubmit = ( e: FormEvent<HTMLFormElement> ) => {
        if ( name ) {
            dispatch({
                type: TodosActionTypes.ADD_LOGIN,
                payload: name
            });
            setName( "" )
            navigate("/todos");
        }
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