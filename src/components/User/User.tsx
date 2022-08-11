import { FC, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
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

  const navigate = useNavigate();
  useEffect(() => {
    if (!userName) {
      navigate('/', { replace: true });
    }
  });

  return (
    <div className={styles.container}>
      <div className={styles.container}>
        <div className={styles.largeText}>{`${userName},`}</div>
        <div className={`${styles.numOfActiveTasks} ${getActiveTasksClassName()}`}>
          {getTaskTrackingText()}
        </div>
      </div>
    </div>
  );
};

export default User;
