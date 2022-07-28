import React, { Component } from 'react'
import styles from './TextInput.module.css'

class TextInput extends Component {
  render() {
    return (
      <div className={styles.main}>
        <label htmlFor={'text-input-id' + this.props.name} className=''>{this.props.label}</label>
        <input placeholder={this.props.label+"..."} 
              maxLength={50}
               value={this.props.value} 
               name={this.props.name}
               onChange={this.props.onChange}
               id={'text-input-id' + this.props.name}/>    
      </div>
    )
  }
}

export default TextInput