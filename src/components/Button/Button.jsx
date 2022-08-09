import React from "react";
import style from "./button.module.css";
import { ReactComponent as ArrowSVG } from "../../svg/btn-arrow.svg";

const Button = ({ text, handleClick }) => {
  return (
    <button className={style.button} onClick={handleClick}>
      <span>{text}</span>
      <ArrowSVG />
    </button>
  );
};

export default Button;
