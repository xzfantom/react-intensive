import React from "react";
import styles from "./Button.module.css";

function Button({ type, children, ...rest }) {
  return (
    <button
      type="submit"
      className={`${styles.button} ${styles["button__primary"]}`}
      {...rest}
    >
      {children}
    </button>
  );
}

function SelectButton({ children, id, ...rest }) {
  return (
    <select
      className={`${styles.button} ${styles["button__select"]}`}
      {...rest}
    >
      {children}
    </select>
  );
}

export { SelectButton, Button };
