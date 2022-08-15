import React from 'react';
import { useSelector } from 'react-redux';
import { getTodos } from '../../redux/todoSlice';
import { selectUsername } from '../../redux/usernameSlice';
import AddTodo from '../AddTodo/AddTodo';
import Todo from '../Todo/Todo';
import styles from './TodoList.module.css' 

function TodoList() {
    const username = useSelector(selectUsername);
    const todos = useSelector(getTodos);

    return (
        <>
            <h1 className={styles.header}>Привет {username}, количество задач: {todos.length}</h1>
            <AddTodo/>
            <div>
                {
                    todos.map((todo) => (
                        <Todo key={todo.id} todo={todo} />
                    ))
                }
            </div>
        </>
    );
}

export default TodoList;