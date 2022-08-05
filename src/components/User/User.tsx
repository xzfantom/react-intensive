import { FC } from 'react';
import styles from './User.module.css';

const User: FC = () => {
  return (
    <div className={styles.container}>
      <img
        className={styles.userAvatar}
        alt="user avatar"
        src="https://www.homeagainsaintjohns.org/wp-content/uploads/2021/05/No-Picture-Yet-Home-Again-St-Johns-Board-Members.png"
      />
      <div>MASHA</div>
    </div>
  );
};

export default User;
