import React, {useState} from 'react';
import styles from './todoItem.module.css';
import Save from '../Icons/saveIcon.png'
import Delete from '../Icons/deleteIcon.png';
import Edit from '../Icons/editIcon.png';
import {useDispatch} from "react-redux";

function TodoItem({ id, title, isCompleted }) {
    const ALT_TEXT = {
        editIcon: "This is edit task icon",
        saveIcon: "This is save editing task icon",
        deleteIcon: "This is delete task icon"
    }
    const dispatch = useDispatch();
    const [ isEditTodo, setIsEditTodo ] = useState(false);
    const [ todoValue, setTodoValue ] = useState( title );
    const onChangeCompleted = () => dispatch({
        type: "CHANGE_COMPLETED",
        payload: id
    })
    const onChangeValue = ( e ) => {
        setTodoValue( e.target.value )
    }
    const onEdit = () => { setIsEditTodo( !isEditTodo )}
    const onSave = ()  => {
        setIsEditTodo( !isEditTodo )
        dispatch({
            type: "EDIT_TODO",
            payload: {
                id: id,
                title: todoValue
            }
        });
    }
    const onDelete = () => dispatch({
        type: "DELETE_TODO",
        payload: id
    })

    return (
        <li className = { styles.todoWrapper } >
            <input
                className = {`${styles.todoOutput} ${isCompleted ? styles.todoOutputCompleted : ""}`}
                value = { todoValue }
                readOnly = { !isEditTodo }
                onClick = { !isEditTodo ? onChangeCompleted : onChangeValue }
                onChange = { onChangeValue }
            />
            <button
                className = { styles.button }
                onClick = { isEditTodo ? onSave : onEdit }
            >
                <img
                    src = { isEditTodo ? Save : Edit }
                    className = { styles.buttonImage }
                    alt = { isEditTodo ? ALT_TEXT.saveIcon : ALT_TEXT.editIcon }
                />
            </button>
            <button
                className = { styles.button }
                onClick = { onDelete }
            >
                <img src = { Delete } className = { styles.buttonImage } alt = { ALT_TEXT.deleteIcon }/>
            </button>
        </li>
    )
}

export default TodoItem;