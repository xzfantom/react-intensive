import styles from "./Buttons.module.css";

export default function Buttons() {
  return (
    <div className={styles["input__buttons-group"]}>
      <button
        className={`${styles.btn} ${styles["btn-outline"]}`}
        type="reset"
        onClick={() => window.scrollTo(0, 0)}
      >
        Reset the form!
      </button>
      <button
        className={`${styles.btn} ${styles["btn-full"]}`}
        type="submit"
        onClick={() => window.scrollTo(0, 0)}
      >
        Save
      </button>
    </div>
  );
}
