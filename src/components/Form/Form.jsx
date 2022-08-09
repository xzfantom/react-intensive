import React from 'react';
import styles from './form.module.css';

const Form = ({ buttonName, placeholder, onSubmit, value, onChange }) => {
    return (
        <form onSubmit = { onSubmit } className = { styles.formWrapper }>
            <input
                type = "text"
                placeholder = { placeholder }
                className = { styles.inputField }
                onChange = { onChange }
                value = { value }
            />
            <button
                type = "submit"
                className = { styles.submit }
            >
                { buttonName }
            </button>
        </form>
    );
};

export default Form;