import { FC, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import type { RootState } from '../../store/index';
import Button from '../Button/Button';
import styles from './User.module.css';
import exitSRC from '../../assets/exitIcon.png';
import useAppDispatch from 'src/utils/useAppDispatch';
import { changeUserName } from 'src/store/todoSlice';

const User: FC = () => {
  const dispatch = useAppDispatch();
  // const { userName } = useSelector((state: RootState) => state.todoReducer);
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

  const userNamefromLS = localStorage.getItem('userName');

  const navigate = useNavigate();
  useEffect(() => {
    if (!userNamefromLS) {
      navigate('/', { replace: true });
    }
  });

  const onExit = () => {
    localStorage.clear();
    dispatch(changeUserName(''));
    navigate('/', { replace: true });
  };

  return (
    <div className={styles.container}>
      <Button myClassName="exit" type="button" onClick={onExit}>
        <img src={exitSRC} alt="delete" />
      </Button>
      <div className={styles.container}>
        <div className={styles.largeText}>{`${userNamefromLS},`}</div>
        <div className={`${styles.numOfActiveTasks} ${getActiveTasksClassName()}`}>
          {getTaskTrackingText()}
        </div>
      </div>
    </div>
  );
};

export default User;
