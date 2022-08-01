import React, { Component } from "react";
import style from "../../containers/Form/form.module.css";

class TextArea extends Component {
  onChange = (event) => {
    this.props.handleChange(event);
  };

  render() {
    const { rows, text, name, value, error, empty } = this.props;

    return (
      <label className={style.element}>
        {text}
        {empty && (
          <div className={style.emptyError}>
            *Поле пустое. Заполните, пожалуйста
          </div>
        )}
        <textarea
          value={value}
          onChange={(event) => this.onChange(event)}
          className={style.input}
          rows={rows}
          placeholder={text}
          name={name}
        ></textarea>
        {error ? (
          <div className={style.error}>{error}</div>
        ) : (
          <div className={style.textAreaCounter}>
            {value.length}/{600}
          </div>
        )}
      </label>
    );
  }
}

export default TextArea;
