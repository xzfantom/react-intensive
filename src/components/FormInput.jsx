import React from 'react';
import style from './FormInput.module.css'

class FormInput extends React.Component {
  constructor(props) {
    super(props);
    this.type = this.props.type || 'text';
  }

  handleChanges = (e) => {
    this.props.onChange(this.props.id, e);
  }

  render() {
    return (
      <>
        <label className={style.label} htmlFor={this.props.id}>{this.props.name}</label>
        <input
          className={style.input}
          type={this.type}
          id={this.props.id}
          placeholder={this.props.name}
          value={this.props.value}
          pattern={this.pattern}
          onChange={this.handleChanges}>
        </input>
      </>
    )
  }
}

export default FormInput;