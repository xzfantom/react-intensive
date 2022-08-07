import { FC } from 'react';
import TaskList from '../TaskList/TaskList';
import User from '../User/User';
import InputTask from '../InputTask/InputTask';
// import styles from './ToDo.module.css';

const ToDo: FC = () => {
  return (
    <>
      <User />
      <InputTask />
      <TaskList />
    </>
  );
};

export default ToDo;
