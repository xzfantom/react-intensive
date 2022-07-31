import React, { Component } from 'react';
import ErrorMsg from './ErrorMsg';
import '../cssModules/inputField.module.css';

class InputField extends Component {
  onChange = (event) => {
    this.props.onChangeValue(event.target.value);
  };

  render() {
    const value = this.props.value;
    const error = this.props.error;
    const type = this.props.type;
    return (
      <div>
        <label>{this.props.field}</label>
        <input
          value={value}
          placeholder={this.props.field}
          onChange={this.onChange}
          type={type}
        />
        <ErrorMsg error={error} />
      </div>
    );
  }
}

export default InputField;
