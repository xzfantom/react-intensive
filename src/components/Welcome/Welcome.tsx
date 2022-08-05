import { FC, useState } from 'react';
import styles from './Welcome.module.css';

const Welcome: FC = () => {
  const [userName, setUserName] = useState('');
  return (
    <div className={styles.container}>
      <div>{userName}</div>
      <label>Let's get started</label>
      <input
        onChange={(e) => {
          setUserName(e.currentTarget.value);
        }}
        name="userName"
        value={userName}
        placeholder="Enter your name"
      ></input>
    </div>
  );
};

export default Welcome;
