import React from "react";
import style from "./errorPage.module.css";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className={style.container}>
      Oops! Page not found... go <Link to={"/registration"}>register</Link> to
      start using the app.
    </div>
  );
};

export default ErrorPage;
