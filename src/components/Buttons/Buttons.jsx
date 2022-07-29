import { Component } from "react";

import styles from "./Buttons.module.css";

class Buttons extends Component {
  render() {
    return (
      <div className={styles["input__buttons-group"]}>
        <button
          className={`${styles.btn} ${styles["btn-outline"]}`}
          type="reset"
        >
          Reset the form!
        </button>
        <button className={`${styles.btn} ${styles["btn-full"]}`} type="submit">
          Save
        </button>
      </div>
    );
  }
}

export default Buttons;
