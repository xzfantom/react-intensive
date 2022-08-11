import React from 'react';
import { useAppSelector } from '../../redux/hooks';
import { getTodos, Todo } from '../../redux/todoSlice';
import { selectUsername } from '../../redux/usernameSlice';
import AddTodo from '../AddTodo/AddTodo';
import TodoComponent from '../TodoComponent/TodoComponent';
import styles from './TodoList.module.css' 

const TodoList = () => {
    const username = useAppSelector(selectUsername);
    const todos = useAppSelector(getTodos);

    return (
        <>
            <h1 className={styles.header}>Привет {username}, количество задач: {todos.length}</h1>
            <AddTodo/>
            <div>
                {
                    todos.map((todo: Todo) => (
                        <TodoComponent key={todo.id} todo={todo} />
                    ))
                }
            </div>
        </>
    );
}

export default TodoList;