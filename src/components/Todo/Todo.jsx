import React, { useState } from "react";
import styles from "./todo.module.css";
import Form from "../Form/Form";
import TodoList from "../TodoList/TodoList";
import TabContainer from "../TabContainer/TabContainer";
import { useDispatch } from "react-redux";
import { ADD_TODO } from "../../redux/actionsTypes";

const Todo = () => {
    const BUTTON_NAME = "Добавить";
    const INPUT_PLACEHOLDER = "Введите новую задачу";
    const dispatch = useDispatch();
    const [ todo, setTodo ] = useState("")
    const onChange = ( e ) => { setTodo( e.target.value ) }
    const onSubmit = ( e ) => {
        dispatch({
            type: ADD_TODO,
            payload: todo
        });
        setTodo( "" )
        e.preventDefault();
    };
    return (
        <div className = { styles.todoWrapper }>
            <Form
                buttonName = { BUTTON_NAME }
                placeholder = { INPUT_PLACEHOLDER }
                onSubmit = { onSubmit }
                onChange = { onChange }
                value = { todo }
            />
            <TabContainer />
            <TodoList />
        </div>
    )
}

export default Todo;