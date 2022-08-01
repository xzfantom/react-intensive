import React from "react";
import style from "../../containers/Form/form.module.css";
import InputMask from "react-input-mask";

const Input = (props) => {
  const onChange = (event) => {
    props.handleChange(event);
  };

  const onBlur = (event) => {
    props.handleBlur(event);
  };

  const { type, text, name, value, error, touched, empty } = props;

  return (
    <label className={style.element}>
      {text}
      {empty && (
        <div className={style.emptyError}>
          *Поле пустое. Заполните, пожалуйста
        </div>
      )}
      {name === "phone" ? (
        <InputMask
          mask="9-9999-99-99"
          maskChar=""
          type={type}
          placeholder={text}
          name={name}
          value={value}
          onChange={(event) => onChange(event)}
          onBlur={(event) => onBlur(event)}
          className={style.input}
        ></InputMask>
      ) : (
        <input
          type={type}
          placeholder={text}
          name={name}
          value={value}
          onChange={(event) => onChange(event)}
          onBlur={(event) => onBlur(event)}
          className={style.input}
        />
      )}
      {error && touched && <div className={style.error}>{error}</div>}
    </label>
  );
};

export default Input;
