import { FC, useState } from 'react';
import styles from './Tabs.module.css';

const Tabs: FC = () => {
  const [nowIsShown, setNowIsShown] = useState('active');

  const activeCalss = () => {
    if (nowIsShown === 'active') {
      return styles.highlited;
    } else {
      return styles.normal;
    }
  };
  const completedClass = () => {
    if (nowIsShown === 'completed') {
      return styles.highlited;
    } else {
      return styles.normal;
    }
  };
  return (
    <div className={styles.container}>
      <div
        className={activeCalss()}
        onClick={() => {
          setNowIsShown('active');
        }}
      >
        Active
      </div>
      <div
        className={completedClass()}
        onClick={() => {
          setNowIsShown('completed');
        }}
      >
        Completed
      </div>
    </div>
  );
};

export default Tabs;
