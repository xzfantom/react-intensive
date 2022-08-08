import React from "react";
import style from "./errorPage.module.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  const user = useSelector((state) => state);
  return (
    <div className={style.container}>
      Oops! Page not found... go <Link to={"/registration"}>register</Link> to
      start using the app.
    </div>
  );
};

export default ErrorPage;
