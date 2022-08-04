import React from 'react';
import styles from './index.module.css';

class Button extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { type = 'button', buttonName, onClick } = this.props;
    return (
      <button type={type} className={styles.myButton} onClick={onClick}>
        {buttonName}
      </button>
    );
  }
}

export default Button;
