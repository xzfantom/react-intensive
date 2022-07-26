import React from "react";

const Input = (props) => {
  const { value, placeholder, onChange, name, type } = props;
  return (
    <div>
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        name={name}
      />
    </div>
  );
};
git
export default Input;
