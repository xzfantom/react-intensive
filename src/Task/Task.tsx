import { FC } from 'react';
import User from '../User/User';
import styles from './ToDo.module.css';

const ToDo: FC = () => {
  return (
    <>
      <User />
      <div className={styles.container}>ToDo</div>
    </>
  );
};

export default ToDo;
