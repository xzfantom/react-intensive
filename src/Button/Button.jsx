import React, { Component } from 'react';
import './button.module.css';

class Button extends Component {
  render() {
    return <button type={this.props.type}>{this.props.value}</button>;
  }
}

export default Button;
