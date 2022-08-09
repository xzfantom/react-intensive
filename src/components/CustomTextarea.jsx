import React from 'react';
import styles from './style.module.css';

function CustomTextarea(props) {
    return (
        <div className={styles.labelWrapper}>
            <label className={styles.label} htmlFor={props.name}>
                {props.label}
                <textarea className={styles.areaInput} id={props.name} name={props.name} placeholder={props.placeholder} rows={7} wrap='hard' onChange={props.onChange} />                
            </label>
            <div className={styles.bottomLabel}>
                <span>{props.value.length > 600
                    ? (<span className={styles.limTextarea}>Превышен лимит символов в поле</span>)
                    : (<span className={styles.capacityTextarea}>Осталось {600 - props.value.length}/600 символов</span>)
                }</span>
                <span className={styles.inputError}>{props.error}</span>    
            </div>
        </div>
    )
}

export default CustomTextarea; 