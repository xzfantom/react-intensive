import React from 'react';
import './textAreaField.module.css';

const TextAreaField = (props) => {
  return (
    <div>
      <label>{props.field}</label>
      <textarea
        name={props.name}
        rows={7}
        placeholder={props.field}
        onChange={props.onChange}
      />
      <span>{props.error}</span>
    </div>
  );
};

export default TextAreaField;
