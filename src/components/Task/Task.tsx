import { FC } from 'react';
import useAppDispatch from 'src/utils/useAppDispatch';
import Button from '../Button/Button';
import styles from './Task.module.css';
import { patchTodoText, deleteTodo, changeTaskStatus } from '../../store/todoSlice';
import useToggler from '../../utils/useToggler';
import useAppSelector from 'src/utils/useAppSelector';

type Props = {
  id: number;
  text: string;
};

const Task: FC<Props> = (props) => {
  const dispatch = useAppDispatch();

  const { id, text } = props;
  const { isCompleted } = useAppSelector((state) => state.todoReducer.todos[id]);

  const [isChangeable, setisChangeable] = useToggler();

  const onTaskChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(patchTodoText({ id: id, text: event.currentTarget.value }));
  };
  const onTaskDelete = () => {
    dispatch(deleteTodo(id));
  };
  const onTaskStatusChange = () => {
    dispatch(changeTaskStatus(id));
  };

  const isCompletedClassName = isCompleted ? styles.completed : '';

  return (
    <>
      <div className={`${isCompletedClassName}`}>
        <input type="checkbox" defaultChecked={isCompleted} onClick={onTaskStatusChange} />
        {isChangeable && (
          <input onChange={isChangeable ? (e) => onTaskChange(e) : undefined} value={text} />
        )}
        {!isChangeable && <div className={styles.active}>{text}</div>}

        <Button
          disabled={isCompleted}
          type="button"
          onClick={typeof setisChangeable != 'boolean' ? () => setisChangeable() : () => {}}
        >
          {isChangeable ? 'Save' : 'Change'}
        </Button>
        <Button disabled={isCompleted} type="button" onClick={() => onTaskDelete()}>
          Delete
        </Button>
      </div>
    </>
  );
};

export default Task;
