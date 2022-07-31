import React from 'react';
import styles from './Input.module.css';

class Input extends React.Component {
  render() {
    const { title, type, placeholder, name, value, onChange } = this.props;
    return (
      <div className={styles.box}>
        <label className={styles.label}>{title}</label>
        <input
          type={type}
          placeholder={placeholder}
          name={name}
          value={value}
          onChange={onChange}
        />
      </div>
    );
  }
}

export default Input;
