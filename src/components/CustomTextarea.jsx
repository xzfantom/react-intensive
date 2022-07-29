import React from 'react';
import styles from './style.module.css';

class CustomTextarea extends React.Component {
    render() {
        return (
            <div className={styles.labelWrapper}>
                <label className={styles.label} htmlFor={this.props.name}>
                    {this.props.label}
                    <textarea className={styles.areaInput} id={this.props.name} name={this.props.name} placeholder={this.props.placeholder} rows={7} wrap='hard' onChange={this.props.onChange} />                
                </label>
                <div className={styles.bottomLabel}>
                    <span>{this.props.value.length > 600
                        ? (<span className={styles.limTextarea}>Превышен лимит символов в поле</span>)
                        : (<span className={styles.capacityTextarea}>Осталось {600 - this.props.value.length}/600 символов</span>)
                    }</span>
                    <span className={styles.inputError}>{this.props.error}</span>    
                </div>
            </div>
            )
    }
}

export default CustomTextarea; 