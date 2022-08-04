import React from 'react';
import styles from './index.module.css';

const Button = (props) => {
  const { type = 'button', buttonName, onClick } = props;
  return (
    <button type={type} className={styles.myButton} onClick={onClick}>
      {buttonName}
    </button>
  );
};

export default Button;
