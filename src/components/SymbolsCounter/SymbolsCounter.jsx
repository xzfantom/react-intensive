import styles from "./SymbolsCounter.module.css";

export default function SymbolsCounter({ fieldLength }) {
  const symbolsAllowed = 600;
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
