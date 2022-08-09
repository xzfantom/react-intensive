import { FC, MouseEventHandler } from "react";
import style from "./button.module.css";
import { ReactComponent as ArrowSVG } from "../../svg/btn-arrow.svg";

interface ButtonProps {
  text: string;
  handleClick: MouseEventHandler<HTMLButtonElement>;
}

const Button: FC<ButtonProps> = ({ text, handleClick }) => {
  return (
    <button className={style.button} onClick={handleClick}>
      <span>{text}</span>
      <ArrowSVG />
    </button>
  );
};

export default Button;
