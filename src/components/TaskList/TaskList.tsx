import { FC } from 'react';
import useAppSelector from 'src/utils/useAppSelector';
import Task from '../Task/Task';
import Tabs from '../Tabs/Tabs';

import styles from './TaskList.module.css';

const TaskList: FC = () => {
  const { ...todos } = useAppSelector((state) => state.todoReducer.todos);

  return (
    <div>
      <Tabs />
      <div className={styles.taskContainer}>
        {Object.entries(todos).map(([id, todo]) => {
          return <Task key={id} id={Number(todo.id)} text={todo.text} />;
        })}
      </div>
    </div>
  );
};

export default TaskList;
