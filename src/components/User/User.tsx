import { FC } from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '../../store/index';
import styles from './User.module.css';

const User: FC = () => {
  const { userName } = useSelector((state: RootState) => state.todoReducer);
  const allToDos = useSelector((state: RootState) => state.todoReducer.todos);
  const arrayOfAllTasks = Object.values(allToDos);
  let numOfActiveTasks = arrayOfAllTasks.filter((todo) => todo.isCompleted === false).length;

  return (
    <div className={styles.container}>
      <img
        className={styles.userAvatar}
        alt="user avatar"
        src="https://www.homeagainsaintjohns.org/wp-content/uploads/2021/05/No-Picture-Yet-Home-Again-St-Johns-Board-Members.png"
      />
      <div>{`${userName}'s ToDo list`}</div>
      <div>{`${numOfActiveTasks} tasks left to complete`}</div>
    </div>
  );
};

export default User;
