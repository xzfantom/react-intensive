import React from 'react';
import styles from './todoList.module.css';
import TodoItem from "../TodoItem/TodoItem";
import { STATE } from "../../redux/selectors";

const TodoList = () => {
    const { todos } = STATE();
    if (!todos) return <div></div>
    return(
        <ul className = { styles.todoList }>
            {todos.map(( todo ) => (
                <TodoItem
                    id = { todo.id }
                    title = { todo.title }
                    key = { todo.id }
                    isCompleted = { todo.completed }
                />
            ))}
        </ul>
    )
}

export default TodoList;