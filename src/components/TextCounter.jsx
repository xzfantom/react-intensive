import { Component } from 'react';

class TextCounter extends Component {
  render() {
    if (
      (this.props.textLength < 100 || this.props.textLength > 300) &&
      this.props.textLength
    ) {
      return `Рекомендуемое количество символов: 100-300, использовано ${this.props.textLength}/600 символов`;
    }
    if (this.props.textLength <= 600 && this.props.textLength) {
      return `Использовано ${this.props.textLength}/600 символов`;
    }
    return '';
  }
}
export default TextCounter;
