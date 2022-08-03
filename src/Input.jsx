import React from 'react';
import styles from './Input.module.css';
class Input extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { inputLabel, type, onChange, name, value, isTextArea = false } = this.props;

    if (isTextArea) {
      return (
        <div className={styles.formInput}>
          <label htmlFor={name}>{inputLabel}</label>
          <textarea
            id={name}
            name={name}
            className={styles.inputText}
            rows="7"
            placeholder={inputLabel}
            onChange={onChange}
            value={value}
          />
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
          placeholder={inputLabel}
          onChange={onChange}
          value={value}
        />
      </div>
    );
  }
}

export default Input;
