import React from "react";
import s from "./MyInput.module.css";

const MyInput = ({
  type,
  id,
  placeholder,
  value,
  onChange,
}) => {
  return (
    <div className={s.flex}>

      <input
        type={type}
        id={id}
        required
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};
export default MyInput;