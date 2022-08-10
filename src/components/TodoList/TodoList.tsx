import React, {FC} from 'react';
import styles from './todoList.module.css';
import TodoItem from "../TodoItem/TodoItem";
import {STATE} from "../../redux/selectors";
import {ITodo} from "../../types/types";

const TodoList: FC = () => {
    const {todos} = STATE();
    if (!todos) return <div></div>
    return(
        <ul className = {styles.todoList}>
            {todos.map((todo:ITodo) => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                />
            ))}
        </ul>
    )
}

export default TodoList;