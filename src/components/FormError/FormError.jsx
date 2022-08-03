import styles from "./FormError.module.css";

export default function FormError({ nameOfInput, inputErrors }) {
  return (
    <>
      {Object.keys(inputErrors).map((errorItem) => {
        if (errorItem.includes(nameOfInput)) {
          return (
            <p key={Math.random()} className={styles.form__error}>
              {inputErrors[errorItem]}
            </p>
          );
        }
        return <div key={Math.random()}></div>;
      })}
    </>
  );
}
