import React from 'react';
import styles from './Button.module.css';

class Button extends React.Component {
  render() {
    const { type, onClick, title } = this.props;
    return (
      <button
        className={type === 'save' ? styles.save : styles.cancel}
        type={type}
        onClick={onClick}
      >
        {title}
      </button>
    );
  }
}

export default Button;
