import React from 'react';
import styles from './outputTextArea.module.css';

function OutputTextArea ({ title, value }) {
    const DEFAULT_FIELD_ROWS = 7;
    
    return (
        <div className = { styles.containerOutputField } >
            <label className = { styles.outputFieldTitle }>{ title }</label>
            <textarea 
                className = { styles.outputField }
                rows = { DEFAULT_FIELD_ROWS }
                value = { value }
                readOnly
            ></textarea>
        </div>
    )
}

export default OutputTextArea;