import React, { Component } from 'react';
import ErrorMsg from './ErrorMsg';
import TextCounter from './TextCounter';
import '../cssModules/textAreaField.module.css';

class TextAreaField extends Component {
  onChange = (event) => {
    this.props.onChangeValue(event.target.value);
  };
  render() {
    const value = this.props.value;
    const error = this.props.error;
    const textLength = this.props.textLength;
    return (
      <div>
        <label>{this.props.field}</label>
        <textarea
          value={value}
          rows={7}
          placeholder={this.props.field}
          onChange={this.onChange}
        />
        <TextCounter textLength={textLength} />
        <ErrorMsg error={error} />
      </div>
    );
  }
}

export default TextAreaField;
