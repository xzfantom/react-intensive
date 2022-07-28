import React, { Component } from 'react';

class Button extends Component {
  render() {
    return (
      <button className="common" type={this.props.type}>
        {this.props.value}
      </button>
    );
  }
}

export default Button;
