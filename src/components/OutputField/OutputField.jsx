import React    from 'react';
import styles   from './outputField.module.css';


function OutputField ( props ) {
    let { value }                   = props;
    const { className, title = "" } = props;
    const DATE_TITLE                = "Дата рождения: ";

    if ( title === DATE_TITLE && value ) {
        value = value.slice(8) + "." + value.slice(5,7) + "." + value.slice(0,4)
    }
    return(
        <div className = { styles.containerOutputField } >
            <div className = { styles.outputFieldTitle }>{ title }</div>
            <div className = { className || styles.outputField }>{ value }</div>
        </div>
    )
}

export default OutputField;