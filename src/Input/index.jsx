import React from 'react';
import styles from './index.module.css';
class Input extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {
      inputLabel,
      type,
      onChange,
      name,
      state,
      isTextArea = false,
      placeholder = inputLabel,
    } = this.props;
    const errorMessage = state.errors[name];
    const value = state.inputs[name];
    const numOfSymbols = value ? value.length : 0;

    if (isTextArea) {
      return (
        <div className={styles.formInput}>
          <label htmlFor={name}>
            <div>{inputLabel}</div>
            <div className={styles.symbolsLimit}>{`${numOfSymbols}/600`}</div>
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
          <div className={errorMessage ? styles.errorMessage : styles.invisible}>
            {errorMessage}
          </div>
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
  }
}

export default Input;
