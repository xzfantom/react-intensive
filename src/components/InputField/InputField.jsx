import React    from 'react';
import styles   from './inputField.module.css'

function InputField ( props ) {
    
    const { label, type, placeholder, valueButton, name, onChange, onClick, value, maxLength, error = "" } = props;
    const DATE_NAME = "birthday";

    return (
        <>
            <label className = { styles.label }>{ label }</label>
            <input 
                type        = { type || styles.text } 
                placeholder = { placeholder }
                name        = { name }
                onChange    = { onChange }
                onClick     = { onClick }
                value       = { valueButton }
                className   = { ( name === DATE_NAME && value ) ? styles.hasDateValue : styles.inputField }
                maxLength   = { maxLength }
            />
            <span className = { styles.error }>{ error }</span>
        </>   
    )

}

export default InputField;