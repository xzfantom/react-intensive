import React from 'react';

function CustomButton(props) {
    return (
        <button className={props.className} type={props.type} name={props.name} onClick={props.onClick}>{props.value}</button>
    )
}

export default CustomButton;