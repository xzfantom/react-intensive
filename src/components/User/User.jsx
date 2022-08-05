// import { FC } from 'react';
import { useSelector } from 'react-redux';
import styles from './User.module.css';

const User = () => {
  const { userName } = useSelector((state) => state.todoReducer.userName);
  return (
    <div className={styles.container}>
      <img
        className={styles.userAvatar}
        alt="user avatar"
        src="https://www.homeagainsaintjohns.org/wp-content/uploads/2021/05/No-Picture-Yet-Home-Again-St-Johns-Board-Members.png"
      />
      <div>{userName}</div>
    </div>
  );
};

export default User;
