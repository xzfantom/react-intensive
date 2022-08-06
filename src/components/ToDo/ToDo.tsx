import { FC } from 'react';
import TaskList from '../TaskList/TaskList';
import User from '../User/User';
import Input from '../Input/Input';
// import styles from './ToDo.module.css';

const ToDo: FC = () => {
  return (
    <>
      <User />
      <Input />
      <TaskList />
    </>
  );
};

export default ToDo;
