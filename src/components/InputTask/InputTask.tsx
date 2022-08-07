import { FC, useState } from 'react';
import useAppDispatch from 'src/utils/useAppDispatch';
import Button from '../Button/Button';
import Input from '../Input/Input';
import styles from './InputTask.module.css';
import { addTodo } from '../../store/todoSlice';

const InputTask: FC = () => {
  const dispatch = useAppDispatch();
  const [inputValue, setInputValue] = useState('');

  const onTaskAdd = () => {
    if (!inputValue) {
      return;
    }
    dispatch(addTodo(inputValue));
    setInputValue('');
  };

  const props = {
    onChangeCallback: setInputValue,
    inputValue: inputValue,
    placeholder: 'Write a new task',
  };

  return (
    <>
      <div className={styles.container}>
        <Input {...props} />

        <Button myStyle="secondary" type="button" onClick={() => onTaskAdd()}>
          Add
        </Button>
      </div>
    </>
  );
};

export default InputTask;
