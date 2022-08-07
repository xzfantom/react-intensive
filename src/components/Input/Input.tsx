import { FC } from 'react';
import styles from './Input.module.css';

type Props = {
  onChangeCallback: (arg0: string) => void;
  inputValue: string;
  placeholder: string;
  errorInput: boolean;
};

const Input: FC<Props> = (props) => {
  const { inputValue, onChangeCallback, placeholder, errorInput } = props;

  const errorStyle = errorInput ? styles.errorInput : null;
  return (
    <input
      className={`${styles.input} ${errorStyle}`}
      type="text"
      onChange={(event) => onChangeCallback(event.currentTarget.value)}
      value={inputValue}
      placeholder={placeholder}
    />
  );
};

export default Input;
