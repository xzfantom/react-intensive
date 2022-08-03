import React from 'react';
import styles from './Input.module.css';
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
    if (isTextArea) {
      return (
        <div className={styles.formInput}>
          <label htmlFor={name}>{inputLabel}</label>
          <textarea
            id={name}
            name={name}
            className={styles.inputText}
            rows="7"
            placeholder={placeholder}
            onChange={onChange}
            value={state[name]}
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
          className={styles.inputText}
          type={type}
          placeholder={placeholder}
          onChange={onChange}
          value={state[name]}
        />
        <div className={errorMessage ? styles.errorMessage : styles.invisible}>{errorMessage}</div>
      </div>
    );
  }
}

export default Input;
