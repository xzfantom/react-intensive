import React from 'react';
import styles from './Button.module.css';

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
    text: string;
}

const Button = ({ onClick, text }: ButtonProps) => {
    return (
        <button className={styles.button} onClick={onClick}>{text}</button>
    );
}

export default Button;