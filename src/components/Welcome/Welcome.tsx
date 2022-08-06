import useAppSelector from '../../utils/useAppSelector';
import useAppDispatch from '../../utils/useAppDispatch';
import styles from './Welcome.module.css';
import { changeUserName } from '../../store/todoSlice';
import Button from '../Button/Button';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

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
  };
  return (
    <div className={styles.container}>
      <label>Let's get started</label>
      <input
        onChange={(event) => {
          const newUserName = event.currentTarget.value;
          dispatch(changeUserName(newUserName));
        }}
        id="userName"
        name="userName"
        value={userName}
        type="text"
        placeholder="Enter your name"
      />
      {isError && <div>"Please enter your name</div>}
      <Button type="button" onClick={onClickSaveButton}>
        Save your name and start
      </Button>
    </div>
  );
};

export default Welcome;
