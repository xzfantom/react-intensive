import { FC } from 'react';

type Props = {
  onChangeCallback: (arg0: string) => void;
  inputValue: string;
  placeholder: string;
};

const Input: FC<Props> = (props) => {
  const { inputValue, onChangeCallback, placeholder } = props;
  return (
    <input
      type="text"
      onChange={(event) => onChangeCallback(event.currentTarget.value)}
      value={inputValue}
      placeholder={placeholder}
    />
  );
};

export default Input;
