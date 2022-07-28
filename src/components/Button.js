import React, { Component } from "react";
import styles from "./Button.module.css";

class Button extends Component {
  render() {
    return (
      <button className={styles.btn} onClick={this.props.handleClick}>
        {this.props.value}
      </button>
    );
  }
}

export default Button;
