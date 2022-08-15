import React, { useState } from 'react'
import styles from './Todo.module.css'
import { deleteTodo } from '../../redux/todoSlice'
import { useDispatch } from 'react-redux'
import EditTodo from '../EditTodo/EditTodo';

const Todo = ({ todo: { title, id } }) => {
    const [editMode, setEditMode] = useState(false);
    const dispatch = useDispatch();

    return (
        <div className={styles.todo}>
            {editMode
                ? <EditTodo id={id} title={title} onClose={() => setEditMode(false)} />
                : (
                    <>
                        <div className={styles.todo__title}>
                            <p>{title}</p>
                        </div>
                        <div className={styles.todo__actions}>
                            <button onClick={() => setEditMode(true)} className={`${styles.btn} ${styles.todo__reminder}`}>
                                <i className="fas fa-pen"></i>
                            </button>
                            <button onClick={() => dispatch(deleteTodo(id))} className={`${styles.todo__delete} ${styles.btn}`}>
                                <i className="fas fa-times"></i>
                            </button>
                        </div>
                    </>
                )
            }
        </div>

    )
}

export default Todo