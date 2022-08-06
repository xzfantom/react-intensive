import { FC } from 'react';
import styles from './Button.module.css';

type Props = {
  buttonText: string;
  onClick: () => void;
  type: 'button' | 'submit' | 'reset' | undefined;
};

const Button: FC<Props> = (props) => {
  const { buttonText, onClick, type = 'button' } = props;
  return (
    <button type={type} className={styles.primaryButton} onClick={onClick}>
      {buttonText}
    </button>
  );
};

export default Button;
