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
    const isProfileShown = state.isProfileShown;
    const errorMessage = state.errors[name];
    const value = state.inputs[name];
    const textareaLimit = 600;

    const numOfSymbolsLeft =
      textareaLimit - value.trim().length < 0 ? 0 : textareaLimit - value.trim().length;
    const isnumOfSymbolsLeft = () => {
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
            {isnumOfSymbolsLeft() && (
              <div
                className={styles.symbolsLimit}
              >{`Осталось ${numOfSymbolsLeft}/${textareaLimit} символов`}</div>
            )}
            {!isnumOfSymbolsLeft() && (
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
