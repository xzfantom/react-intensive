import React, { useContext } from "react";
import MyButton from "../MyButton/MyButton";
import ReactDOM from "react-dom";
import s from "./Login.module.css";

const Login = ({ show, close, title, children }) => {
  return ReactDOM.createPortal(
    <>
      {show ? (
        <div
          className={`${s.modalContainer} ${s.show}`}
          onClick={() => close()}
        >
          <div className={s.modal} onClick={(e) => e.stopPropagation()}>
            <header className={s.modal_header}>
              <h2 className={s.modal_headerTitle}>
                {title} <br />
              </h2>
              <div className={s.close}>
                <MyButton onClick={() => close()}>
                  <img
                    className={s.imgC}
                    src="https://avatanplus.com/files/resources/original/5968a2c8f2ed115d40bbe123.png"
                    alt="close"
                  />
                </MyButton>
              </div>
            </header>
            <main className={s.modal_content}>{children}</main>
          </div>
        </div>
      ) : null}
    </>,
    document.getElementById("login")
  );
};

export default Login;

