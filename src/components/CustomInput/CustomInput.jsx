import React from "react";
import s from './CustomInput.module.css'

class CustomInput extends React.Component {
    render() {
        const {type, name, state, label, placeholder, onChange, onBlur} =
            this.props;
        return (
            <>
                <label className="inputLabel">{label}</label>
                <input
                    type={type}
                    name={name}
                    onChange={onChange}
                    value={state[name]}
                    placeholder={placeholder}
                    onBlur={onBlur}
                />
            </>
        );
    }
}

export default CustomInput;
