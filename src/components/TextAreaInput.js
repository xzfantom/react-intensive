import React, { Component } from 'react'
import styles from './TextAreaInput.module.css'

class TextAreaInput extends Component {
  render() {
    return (
      <div className={styles.main}>
        <label htmlFor={'text-area-id' + this.props.name}>{this.props.label}</label>
        <textarea placeholder={this.props.label+"..."} 
               id={'text-area-id' + this.props.name}
               value={this.props.value} 
               maxLength={32*7}
               name={this.props.name}
               onChange={this.props.onChange}
               rows={7}
               cols={29}/>
      </div>
    )
  }
}

export default TextAreaInput