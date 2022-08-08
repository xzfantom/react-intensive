import React from 'react';
import styles from './header.module.css';
import { useSelector } from "react-redux";

const Header = () => {
    const count = useSelector( state => state.todos.filter(( todo ) => todo.completed === false).length );
    const name = useSelector( state => state.name );
    const isLogin = useSelector( state => state.isLogin );
    const ACTIVE_TASK_TEXT = (isLogin) ? `Активных задач: ${count}` : "Введите ваше имя";
    return (
        <div className={ styles.header }>
            <h1>{ name }</h1>
            <div>{ ACTIVE_TASK_TEXT }</div>
        </div>
    )
}

export default Header;