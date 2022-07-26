import React from 'react';
import style from './FormTextarea.module.css';

class FormTextarea extends React.Component {

  handleChanges = (e) => {
    this.props.onChange(this.props.id, e.target.value);
  }

  render() {
    return (
      <div className={style.FormTextarea}>
        <label htmlFor={this.props.id}>{this.props.name}</label>
        <textarea
          id={this.props.id}
          placeholder={this.props.name}
          rows='7'
          value={this.props.value}
          onChange={this.handleChanges}>
        </textarea>
      </div>
    )
  }
}

export default FormTextarea;