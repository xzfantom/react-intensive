import { FC } from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '../../store/index';
import styles from './User.module.css';

const User: FC = () => {
  const { userName } = useSelector((state: RootState) => state.todoReducer);
  const allToDos = useSelector((state: RootState) => state.todoReducer.todos);
  const arrayOfAllTasks = Object.values(allToDos);
  let numOfActiveTasks = arrayOfAllTasks.filter((todo) => todo.isCompleted === false).length;
  const getTaskTrackingText = () => {
    if (numOfActiveTasks === 1) return `${numOfActiveTasks} pending task`;
    if (numOfActiveTasks) return `${numOfActiveTasks} pending tasks`;
    if (numOfActiveTasks === 0) return `No pending tasks`;
    else return null;
  };

  const getActiveTasksClassName = () => {
    if (numOfActiveTasks === 0) return styles.green;
  };

  return (
    <div className={styles.container}>
      <h1>{`ToDo list`}</h1>
      <div>{`for ${userName}'`}</div>
      <div className={`${styles.numOfActiveTasks} ${getActiveTasksClassName()}`}>
        {getTaskTrackingText()}
      </div>
      )
    </div>
  );
};

export default User;
