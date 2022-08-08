import { FC, ReactNode } from 'react';
import styles from './Button.module.css';

type Props = {
  myClassName: 'primary' | 'addTask' | 'tool' | 'exit';
  disabled?: boolean;
  children?: ReactNode;
  onClick: () => void;
  type?: 'button' | 'submit' | 'reset' | undefined;
};

const Button: FC<Props> = (props) => {
  const { onClick, type = 'button', disabled = false, myClassName } = props;
  return (
    <button
      type={type}
      className={`${styles.button} ${styles[myClassName]}`}
      onClick={onClick}
      disabled={disabled}
    >
      {props.children}
    </button>
  );
};

export default Button;
