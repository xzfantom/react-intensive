import React from 'react';
import styles from './todoList.module.css';
import TodoItem from "../TodoItem/TodoItem";
import { useSelector } from "react-redux";

const TodoList = () => {
    const selectedTodos = useSelector(( state ) => state.selectedTodos);
    const todos = useSelector(( state ) =>
        ( selectedTodos === "active" ) ? state.todos.filter(( todo ) => todo.completed === false)
        : ( selectedTodos === "inactive" ) ? state.todos.filter(( todo ) => todo.completed === true)
        :  state.todos );
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