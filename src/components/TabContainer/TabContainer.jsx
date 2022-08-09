import React, {useState} from 'react';
import styles from './tabContainer.module.css';
import { useDispatch } from "react-redux";
import { CHANGE_SELECTED_TODOS } from "../../redux/actionsTypes";
import { STATE } from "../../redux/selectors";

const TabContainer = () => {
    const BUTTON_NAME = {
        all: "Все",
        active: "Активные",
        inactive: "Неактивные",
    };
    const { selectedTodosList } = STATE()
    const [ isActiveButton, setIsActiveButton ] = useState( selectedTodosList );
    const dispatch = useDispatch();
    const onClick = ( e ) => {
        setIsActiveButton( e.target.name )
        dispatch({
            type: CHANGE_SELECTED_TODOS,
            payload: e.target.name
        });
    }
    return(
        <div className = { styles.tabContainerWrapper }>
            <button
                name = "all"
                className = {`${styles.button} ${ isActiveButton === "all" ? styles.activeButton : "" }`}
                onClick = { onClick }
            >
                { BUTTON_NAME.all }
            </button>
            <button
                name = "active"
                className = {`${styles.button} ${ isActiveButton === "active" ? styles.activeButton : "" }`}
                onClick = { onClick }
            >
                { BUTTON_NAME.active }
            </button>
            <button
                name = "inactive"
                className = {`${styles.button} ${ isActiveButton === "inactive" ? styles.activeButton : "" }`}
                onClick = { onClick }
            >
                { BUTTON_NAME.inactive }
            </button>
        </div>
    )
}

export default TabContainer