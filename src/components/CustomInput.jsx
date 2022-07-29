import React from 'react';
import styles from './style.module.css';

class CustomInput extends React.Component {
    constructor(props) {
        super();
        this.state = {
            inputValue: 0
        }
    }
    render() {
        return (
            <div className={styles.labelWrapper}>
                <label className={styles.inputLabel} htmlFor={this.props.name}>
                    {this.props.label}               
                        <input className={styles.customInput} id={this.props.name} name={this.props.name} placeholder={this.props.placeholder} type={this.props.type} maxlength={this.props.maxlength} onChange={this.props.onChange} />
                </label>
                <span className={styles.inputError}>{this.props.error}</span>
            </div>
        )
    }
}

export default CustomInput;