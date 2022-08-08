import useAppSelector from '../../utils/useAppSelector';
import useAppDispatch from '../../utils/useAppDispatch';
import styles from './Welcome.module.css';
import '../../index.css';
import { changeUserName } from '../../store/todoSlice';
import Button from '../Button/Button';
import Input from '../Input/Input';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const ERROR_MESSAGE = 'Please, introduce yourself to proceed';
const Welcome = () => {
  const dispatch = useAppDispatch();
  const [isError, setIsError] = useState(false);
  const userName = useAppSelector((state) => state.todoReducer.userName);
  const navigate = useNavigate();
  const onClickSaveButton = () => {
    if (!userName) {
      setIsError(true);
      return;
    }
    navigate('/to-do', { replace: true });
    localStorage.setItem('userName', userName);
  };

  const inputProps = {
    onChangeCallback: (value: string) => dispatch(changeUserName(value)),
    inputValue: userName,
    placeholder: 'Enter your name',
    myClassName: isError ? 'errorInput' : '',
  };

  return (
    <div className={styles.container}>
      <div className={styles.layoutForWelcomePage}>
        <label className={styles.welcomingMessage}>Let's get started</label>
        <Input {...inputProps} />
        {isError && <div className={styles.errorMessage}>{ERROR_MESSAGE}</div>}
        <Button myClassName="primary" type="button" onClick={onClickSaveButton}>
          Go
        </Button>
      </div>
    </div>
  );
};

export default Welcome;
