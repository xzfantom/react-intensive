import React from 'react';
import styles from './index.module.css';

const Input = (props) => {
  const {
    inputLabel,
    type,
    onChange,
    name,
    inputs,
    errors,
    isProfileShown,
    isTextArea = false,
    placeholder = inputLabel,
  } = props;

  const errorMessage = errors[name];
  const value = inputs[name];
  const textareaLimit = 600;

  const numOfSymbolsLeft =
    textareaLimit - value.trim().length < 0 ? 0 : textareaLimit - value.trim().length;
  const checkIfNumOfSymbolsLeft = () => {
    if (textareaLimit - value.length < 0) {
      return false;
    } else {
      return true;
    }
  };

  if (isProfileShown) {
    return (
      <div className={styles.formInput}>
        <label>{inputLabel}</label>
        <div className={styles.inputText}>{value}</div>
      </div>
    );
  }

  if (isTextArea) {
    return (
      <div className={styles.formInput}>
        <label htmlFor={name}>
          <div>{inputLabel}</div>
          {checkIfNumOfSymbolsLeft() && (
            <div
              className={styles.symbolsLimit}
            >{`Осталось ${numOfSymbolsLeft}/${textareaLimit} символов`}</div>
          )}
          {!checkIfNumOfSymbolsLeft() && (
            <div className={styles.errorInLabel}>Превышен лимит символов в поле</div>
          )}
        </label>
        <textarea
          id={name}
          name={name}
          className={errorMessage ? styles.inputTextError : styles.inputText}
          rows="7"
          placeholder={placeholder}
          onChange={onChange}
          value={value}
        />
        <div className={errorMessage ? styles.errorMessage : styles.invisible}>{errorMessage}</div>
      </div>
    );
  }

  return (
    <div className={styles.formInput}>
      <label htmlFor={name}>{inputLabel}</label>
      <input
        id={name}
        name={name}
        className={errorMessage ? styles.inputTextError : styles.inputText}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
      <div className={errorMessage ? styles.errorMessage : styles.invisible}>{errorMessage}</div>
    </div>
  );
};

export default Input;
