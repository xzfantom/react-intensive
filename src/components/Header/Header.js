import React, { Component } from "react";
import s from "./Header.module.css";
class Header extends Component {
  state = {
    header: "",
  };
  render() {
    const { header } = this.state;
    return (
      <div>
        <h1 className={s.center}>Создание анкеты:{header}</h1>
      </div>
    );
  }
}

export default Header;