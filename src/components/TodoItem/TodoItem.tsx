import React, {ChangeEvent, FC, useState} from 'react';
import styles from './todoItem.module.css';
import Save from '../Icons/saveIcon.png'
import Delete from '../Icons/deleteIcon.png';
import Edit from '../Icons/editIcon.png';
import { useDispatch } from "react-redux";
import { TodosActionTypes } from "../../types/actionsTypes";
import { ITodo } from "../../types/types";

interface TodoItemProps { todo: ITodo }

const TodoItem: FC<TodoItemProps> = ({ todo }) => {
    const ALT_TEXT = {
        editIcon: "This is edit task icon",
        saveIcon: "This is save editing task icon",
        deleteIcon: "This is delete task icon"
    }
    const dispatch = useDispatch();
    const [ isEditTodo, setIsEditTodo ] = useState<boolean>(false);
    const [ todoValue, setTodoValue ] = useState<string>( todo.title );
    const onChangeCompleted = ( ) => {
       if ( !isEditTodo ) {
           dispatch({
               type: TodosActionTypes.CHANGE_COMPLETED,
               payload: todo.id
           })
       }
    }
    const onChangeValue = ( e: ChangeEvent<HTMLInputElement>  ) => { setTodoValue( (e.target as any).value )}
    const onEdit = () => { setIsEditTodo( !isEditTodo )}
    const onSave = ()  => {
        setIsEditTodo( !isEditTodo )
        dispatch({
            type: TodosActionTypes.EDIT_TODO,
            payload: {
                id: todo.id,
                title: todoValue
            }
        });
    }
    const onDelete = () => dispatch({
        type: TodosActionTypes.DELETE_TODO,
        payload: todo.id
    })

    return (
        <li className = { styles.todoWrapper } >
            <input
                className = {`${styles.todoOutput} ${todo.completed ? styles.todoOutputCompleted : ""}`}
                value = { todoValue }
                readOnly = { !isEditTodo }
                onClick = { onChangeCompleted  }
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