import React from "react";
import s from "./MuButton.module.css";
const MyButton = (props) => {
  const { onClick } = props;
  return (
    <div>
      <button onClick={onClick} className={s.add}>
        {props.children}
      </button>
    </div>
  );
};

export default MyButton;