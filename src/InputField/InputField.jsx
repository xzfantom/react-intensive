import React from 'react';
import './inputField.module.css';

const InputField = (props) => {
  return (
    <div>
      <label>{props.field}</label>
      <input
        name={props.name}
        placeholder={props.field}
        type={props.type}
        onChange={props.onChange}
      />
      <span>{props.error}</span>
    </div>
  );
};

export default InputField;
