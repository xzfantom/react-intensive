import { Component } from "react";
import styles from "./Header.module.css";

class Header extends Component {
  render() {
    return (
      <header className={styles.header}>
        <h1>Questionnaire</h1>
      </header>
    );
  }
}

export default Header;
