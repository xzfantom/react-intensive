import React, { Component } from 'react';
import '../cssModules/inputField.module.css';

class InputField extends Component {
  onChange = (event) => {
    this.props.onChangeValue(event.target.value);
  };

  render() {
    const value = this.props.value;
    return (
      <div>
        <label>{this.props.field}</label>
        <input
          value={value}
          placeholder={this.props.field}
          onChange={this.onChange}
        />
      </div>
    );
  }
}

export default InputField;
