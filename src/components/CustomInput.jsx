import React from 'react';
import styles from './style.module.css';

function CustomInput(props) {    
    return (
        <div className={styles.labelWrapper}>
            <label className={styles.inputLabel} htmlFor={props.name}>
                {props.label}               
                    <input className={styles.customInput} id={props.name} name={props.name} placeholder={props.placeholder} type={props.type} maxLength={props.maxlength} onChange={props.onChange} />
            </label>
            <span className={styles.inputError}>{props.error}</span>
        </div>
    )
}

export default CustomInput;