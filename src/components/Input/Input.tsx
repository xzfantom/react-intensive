import { FC, useState } from 'react';
import useAppDispatch from 'src/utils/useAppDispatch';
import Button from '../Button/Button';
import styles from './Input.module.css';
import { addTodo } from '../../store/todoSlice';

const Input: FC = () => {
  const dispatch = useAppDispatch();
  const [inputValue, setInputValue] = useState('');

  const onTaskAdd = () => {
    if (!inputValue) {
      return;
    }
    dispatch(addTodo(inputValue));
    setInputValue('');
  };

  return (
    <>
      <div className={styles.container}>
        <input
          type="text"
          onChange={(event) => setInputValue(event.currentTarget.value)}
          value={inputValue}
        />

        <Button type="button" onClick={() => onTaskAdd()}>
          Add
        </Button>
      </div>
    </>
  );
};

export default Input;
