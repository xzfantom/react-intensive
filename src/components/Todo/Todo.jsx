import React from "react";
import styles from "./todo.module.css";
import Form from "../Form/Form";
import TodoList from "../TodoList/TodoList";
import TabContainer from "../TabContainer/TabContainer";

const Todo = () => {
    return (
        <div className = { styles.todoWrapper }>
            <Form type = "todo"/>
            <TabContainer />
            <TodoList />
        </div>
    )
}

export default Todo;