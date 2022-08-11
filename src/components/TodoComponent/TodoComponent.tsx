import { useState } from 'react'
import styles from './TodoComponent.module.css'
import { deleteTodo, Todo } from '../../redux/todoSlice'
import EditTodo from '../EditTodo/EditTodo';
import { useAppDispatch } from '../../redux/hooks';

interface TodoState {
    todo: Todo;
}

const TodoComponent = ({ todo: { title, id } }: TodoState) => {
    const [editMode, setEditMode] = useState(false);
    const dispatch = useAppDispatch();

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

export default TodoComponent;