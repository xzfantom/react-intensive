import React, { FC } from 'react';
import styles from './header.module.css';
import { STATE } from "../../redux/selectors";

const Header: FC = () => {
    const { activeTodosCount, userName, isLogin } = STATE();
    const ACTIVE_TASK_TEXT = ( isLogin ) ? `Активных задач: ${activeTodosCount}` : "Введите ваше имя";
    return (
        <div className={ styles.header }>
            <h1>{ userName }</h1>
            <div>{ ACTIVE_TASK_TEXT }</div>
        </div>
    )
}

export default Header;