import React from 'react';
import style from './FormInput.module.css';

class FormInput extends React.Component {

  handleChanges = (e) => {
    this.props.onChange(this.props.id, e.target.value);
  }

  render() {
    return (
      <div className={style.FormInput}>
        <label htmlFor={this.props.id}>{this.props.name}</label>
        <input
          id={this.props.id}
          placeholder={this.props.name}
          value={this.props.value}
          onChange={this.handleChanges}>
        </input>
      </div>
    )
  }
}

export default FormInput;