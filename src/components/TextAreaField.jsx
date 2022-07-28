import React, { Component } from 'react';

class TextAreaField extends Component {
  onChange = (event) => {
    this.props.onChangeValue(event.target.value);
  };
  render() {
    const value = this.props.value;
    return (
      <div>
        <label>
          {this.props.field}
          <br />
        </label>
        <textarea
          className="common"
          value={value}
          rows={7}
          placeholder={this.props.field}
          onChange={this.onChange}
        />
      </div>
    );
  }
}

export default TextAreaField;
