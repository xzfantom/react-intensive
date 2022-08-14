import { FC, ReactNode } from "react";
import styles from "./Button.module.css";

interface IButton {
  children: ReactNode;
  rest?: any;
  onClick?: () => void;
  onChange?: React.ChangeEventHandler<any>;
  value?: string;
}

const Button: FC<IButton> = ({ children, ...rest }) => {
  return (
    <button
      type="submit"
      className={`${styles.button} ${styles["button__primary"]}`}
      {...rest}
    >
      {children}
    </button>
  );
};

const SelectButton: FC<IButton> = ({ children, ...rest }) => {
  return (
    <select
      className={`${styles.button} ${styles["button__select"]}`}
      {...rest}
    >
      {children}
    </select>
  );
};

export { SelectButton, Button };
