import { FC } from 'react';
import useAppSelector from 'src/utils/useAppSelector';
import Task from '../Task/Task';
// import styles from './Task.module.css';

const TaskList: FC = () => {
  const { ...todos } = useAppSelector((state) => state.todoReducer.todos);

  return (
    <>
      {Object.entries(todos).map(([id, todo]) => {
        return <Task key={id} id={Number(todo.id)} text={todo.text} />;
      })}
    </>
  );
};

export default TaskList;
