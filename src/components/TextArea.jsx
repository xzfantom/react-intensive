import React, {Component} from 'react';
import styles from './Form.module.css';


class TextArea extends Component {
    render() {
        const {label, rows, placeholder, name, onChange, error, counter} = this.props;
        const TEXT_COUNTER = `Осталось ${counter}/600 символов`;
        const TEXT_ERROR = "Превышен лимит символов в поле";
        const DEFAULT_FIELD_ROWS = 7;

        return (
            <>
                <label className={styles.label}>{label}</label>
                <textarea 
                    rows={rows || DEFAULT_FIELD_ROWS}
                    placeholder={placeholder}
                    name={name}
                    onChange={onChange}
                    className={styles.textArea}
                />
                <span className={(counter >= 0) ? styles.counter : styles.disable}>
                    {TEXT_COUNTER}
                </span>
                <span className={(counter < 0) ? styles.error : styles.disable}>
                    {TEXT_ERROR}
                </span>
                <span className={styles.error}>{error}</span>
            </>
        )
    }
}

export default TextArea;