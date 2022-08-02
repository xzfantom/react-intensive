import React from 'react';
import style from './FormTextArea.module.css';

class FormTextarea extends React.Component {

  handleChanges = (e) => {
    this.props.onChange(this.props.id, e);
  }

  render() {
    const count = 600 - this.props.value.length;
    let message = count < 0 ? 'Превышен лимит символов в поле' : `Осталось ${count}/600 символов`;
    return (
      <>
        <label className={style.label} htmlFor={this.props.id}>{this.props.name}</label>
        <textarea
          className={style.textarea}
          id={this.props.id}
          placeholder={this.props.name}
          value={this.props.value}
          onChange={this.handleChanges}
          rows='7'
        >
        </textarea>
        <div className={style.symbolsLeft}>{message}</div>
      </>
    )
  }
}

export default FormTextarea;