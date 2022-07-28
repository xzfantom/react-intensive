import React from "react";
import s from "./CustomInput.module.css";

const CustomInput = (props) => {
  const { value, placeholder, onChange, name, type } = props;
  return (
    <div>
      <input
        className={s.input}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        name={name}
      />
    </div>
  );
};
export default CustomInput;
