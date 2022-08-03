import React from 'react';
import styles from './Button.module.css';

class Button extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { type = 'button', buttonName } = this.props;
    return (
      <button type={type} className={styles.myButton}>
        {buttonName} {type}
      </button>
    );
  }
}

export default Button;
