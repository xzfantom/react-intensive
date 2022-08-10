import React, {MouseEvent, FC, useState} from 'react';
import styles from './tabContainer.module.css';
import {useDispatch} from "react-redux";
import {STATE} from "../../redux/selectors";
import {ChangeSelectedAction} from "../../redux/actionCreator";

const TabContainer: FC = () => {
    const BUTTON_NAME = {
        all: "Все",
        active: "Активные",
        inactive: "Неактивные",
    };
    const {selectedTodosList} = STATE()
    const [isActiveButton, setIsActiveButton] = useState<string>(selectedTodosList);
    const dispatch = useDispatch();
    const onClick = (e: MouseEvent<HTMLButtonElement>) => {
        setIsActiveButton((e.target as any).name)
        dispatch(ChangeSelectedAction((e.target as any).name))
    }
    return(
        <div className={styles.tabContainerWrapper}>
            <button
                name="all"
                className={`${styles.button} ${isActiveButton === "all" ? styles.activeButton : "" }`}
                onClick={onClick}
            >
                {BUTTON_NAME.all}
            </button>
            <button
                name="active"
                className={`${styles.button} ${isActiveButton === "active" ? styles.activeButton : "" }`}
                onClick={onClick}
            >
                {BUTTON_NAME.active}
            </button>
            <button
                name="inactive"
                className={`${styles.button} ${isActiveButton === "inactive" ? styles.activeButton : "" }`}
                onClick={onClick}
            >
                {BUTTON_NAME.inactive}
            </button>
        </div>
    )
}

export default TabContainer