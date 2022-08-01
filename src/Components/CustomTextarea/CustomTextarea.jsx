import React from "react";
import s from './CustomTextarea.module.css'
const CustomTextarea = (props) => {
    const {
        name,
        onChange,
        state,
        label,
        rows,
        placeholder,
        maxLength,
        onBlur,
        length,
        error,
    } = props;

    return (
        <>
            <label className="textareaLabel">{label}</label>
            <textarea
                rows={rows}
                value={state[name]}
                placeholder={placeholder}
                onChange={onChange}
                name={name}
                onBlur={onBlur}
            ></textarea>
            <span className="counter">
        {length}

                /{maxLength}
      </span>
            <span className={s.errorMax}>
                 {error}
      </span>
        </>
    );
};

export default CustomTextarea;
