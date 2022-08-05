import useAppSelector from '../../utils/useAppSelector';
import useAppDispatch from '../../utils/useAppDispatch';
import styles from './Welcome.module.css';
import { changeUserName } from '../../store/todoSlice';

const Welcome = () => {
  const dispatch = useAppDispatch();
  const userName = useAppSelector((state) => state.todoReducer.userName);

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
    </div>
  );
};

export default Welcome;
