import { FC } from 'react';
import TaskList from '../TaskList/TaskList';
import User from '../User/User';
import styles from './ToDo.module.css';

const ToDo: FC = () => {
  return (
    <>
      <User />
      <div className={styles.container}>ToDo List</div>
      <TaskList />
    </>
  );
};

export default ToDo;
