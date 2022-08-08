import React from "react";
import style from "./button.module.css";
import {ReactComponent as ArrowSVG} from '../../svg/btn-arrow.svg';

const Button = ({children, handleClick}) => {
  return (
    <button className={style.button} onClick={handleClick}>
      <span>{children}</span>
      <ArrowSVG></ArrowSVG>
    </button>
  );
};

export default Button;
