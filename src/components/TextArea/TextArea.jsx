import React from "react";
import style from "../../containers/Form/form.module.css";

const TextArea = (props) => {
  const onChange = (event) => {
    props.handleChange(event);
  };

  const { rows, text, name, value, error, empty } = props;

  return (
    <label className={style.element}>
      {text}
      {empty && (
        <div className={style.emptyError}>
          *Поле пустое. Заполните пожалуйста
        </div>
      )}
      <textarea
        value={value}
        onChange={(event) => onChange(event)}
        className={style.input}
        rows={rows}
        placeholder={text}
        name={name}
      ></textarea>
      {error ? (
        <div className={style.error}>{error}</div>
      ) : (
        <div className={style.textAreaCounter}>{value.length}/600</div>
      )}
    </label>
  );
};

export default TextArea;
