import React, {useState} from 'react';
import styles from './tabContainer.module.css';
import {useDispatch, useSelector} from "react-redux";

const TabContainer = () => {
    const BUTTON_NAME = {
        all: "Все",
        active: "Активные",
        inactive: "Неактивные",
    };
    const selectedTodos = useSelector( state => state.selectedTodos);
    const [ isActiveButton, setIsActiveButton ] = useState( selectedTodos );
    const dispatch = useDispatch();
    const onClick = ( e ) => {
        setIsActiveButton(e.target.name)
        dispatch({
            type: "CHANGE_SELECTED_TODOS",
            payload: e.target.name
        });
    }
    return(
        <div className = { styles.tabContainerWrapper }>
            <button
                name = "all"
                className = {`${styles.button} ${isActiveButton === "all" ? styles.activeButton : ""}`}
                onClick = { onClick }
            >
                { BUTTON_NAME.all }
            </button>
            <button
                name = "active"
                className = {`${styles.button} ${isActiveButton === "active" ? styles.activeButton : ""}`}
                // className = { isActiveButton === "active" ? styles.activeButton : styles.button}
                onClick = { onClick }
            >
                { BUTTON_NAME.active }
            </button>
            <button
                name = "inactive"
                className = {`${styles.button} ${isActiveButton === "inactive" ? styles.activeButton : ""}`}
                onClick = { onClick }
            >
                { BUTTON_NAME.inactive }
            </button>
        </div>
    )
}

export default TabContainer