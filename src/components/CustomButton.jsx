import React from 'react';

class CustomButton extends React.Component {
    
    render() {
        return (
            <button className={this.props.className} type={this.props.type} name={this.props.name} onClick={this.props.onClick}>{this.props.value}</button>
        )
    }
}

export default CustomButton;