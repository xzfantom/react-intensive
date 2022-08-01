import React from "react";
import s from "./CustomInput.module.css";

const CustomInput = (props) => {
    const {type, name, state, label, placeholder, onChange, onBlur, onSubmit} =
        props;

    return (
        <>
            <label>{label}</label>
            <input
                type={type}
                name={name}
                onChange={onChange}
                value={state[name]}
                placeholder={placeholder}
                onBlur={onBlur}
                onSubmit={onSubmit}
            />
        </>
    );
};

export default CustomInput;
