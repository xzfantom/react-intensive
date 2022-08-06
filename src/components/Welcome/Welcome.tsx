import useAppSelector from '../../utils/useAppSelector';
import useAppDispatch from '../../utils/useAppDispatch';
import styles from './Welcome.module.css';
import { changeUserName } from '../../store/todoSlice';
import Button from '../Button/Button';
import { Link } from 'react-router-dom';

const Welcome = () => {
  const dispatch = useAppDispatch();
  const userName = useAppSelector((state) => state.todoReducer.userName);
  const onClickSaveButton = () => {
    alert('saved');
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
      <Link to="/to-do">
        <Button type="button" buttonText="Save your name and start" onClick={onClickSaveButton} />
      </Link>
    </div>
  );
};

export default Welcome;
