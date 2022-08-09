import React, {MouseEvent, FC, useState } from 'react';
import styles from './tabContainer.module.css';
import { useDispatch } from "react-redux";
import { TodosActionTypes} from "../../types/actionsTypes";
import { STATE } from "../../redux/selectors";

const TabContainer: FC = () => {
    const BUTTON_NAME = {
        all: "Все",
        active: "Активные",
        inactive: "Неактивные",
    };
    const { selectedTodosList } = STATE()
    const [ isActiveButton, setIsActiveButton ] = useState<string>( selectedTodosList );
    const dispatch = useDispatch();
    const onClick = ( e: MouseEvent<HTMLButtonElement>  ) => {
        setIsActiveButton( (e.target as any).name )
        dispatch({
            type: TodosActionTypes.CHANGE_SELECTED_TODOS,
            payload: (e.target as any).name
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