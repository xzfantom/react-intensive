// import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './Welcome.module.css';
import { changeUserName } from '../../redux/reducers';

const Welcome = () => {
  const dispatch = useDispatch();
  const { userName } = useSelector((state) => state.todoReducer);

  return (
    <div className={styles.container}>
      <label>Let's get started</label>
      <input
        onChange={(event) => {
          debugger;
          dispatch(changeUserName(event.currentTarget.value));
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
