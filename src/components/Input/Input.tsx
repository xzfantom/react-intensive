import { FC } from 'react';
import useAppDispatch from 'src/utils/useAppDispatch';
import Button from '../Button/Button';
import styles from './Input.module.css';
import { addTodo } from '../../store/todoSlice';

const Input: FC = () => {
  const dispatch = useAppDispatch();

  // const onTaskChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   dispatch(patchTodoText({ id: id, text: event.currentTarget.value }));
  // };

  const onTaskAdd = () => {
    dispatch(addTodo('sdasd'));
  };

  return (
    <>
      <div className={styles.container}>
        <input type="text" value="sd" />

        <Button type="button" onClick={() => onTaskAdd()}>
          Add
        </Button>
      </div>
    </>
  );
};

export default Input;
