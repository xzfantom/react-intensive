import { FC } from 'react';
import styles from './Input.module.css';

type Props = {
  onChangeCallback: (arg0: string) => void;
  inputValue: string;
  placeholder?: string;
  myClassName: string;
};

const Input: FC<Props> = (props) => {
  const { inputValue, onChangeCallback, placeholder, myClassName } = props;
  console.log('inputValue');
  console.log(inputValue);
  return (
    <input
      className={`${styles.input} ${styles[myClassName]}`}
      type="text"
      onChange={(event) => onChangeCallback(event.currentTarget.value)}
      value={inputValue}
      placeholder={placeholder}
    />
  );
};

export default Input;
