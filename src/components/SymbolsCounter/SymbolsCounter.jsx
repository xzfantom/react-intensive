import { Component } from "react";
import styles from "./SymbolsCounter.module.css";

class SymbolsCounter extends Component {
  render() {
    const symbolsAllowed = 600;
    const { fieldLength } = this.props;

    return (
      <div>
        {fieldLength <= symbolsAllowed && (
          <p className={styles["form__info-counter"]}>
            {symbolsAllowed - fieldLength} of 600 symbols left
          </p>
        )}
        {fieldLength > symbolsAllowed && (
          <p className={`${styles["form__info-counter"]} ${styles.exceed}`}>
            {fieldLength - symbolsAllowed} symbols exceed
          </p>
        )}
      </div>
    );
  }
}

export default SymbolsCounter;
