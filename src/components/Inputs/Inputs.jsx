import FormError from "../FormError";
import styles from "./Inputs.module.css";

export default function Inputs({
  textValue,
  onInputChange,
  onBlur,
  formErrors,
}) {
  return (
    <div className={styles["form__inputs-group"]}>
      <div className={styles["input-field"]}>
        <label>
          First Name
          <input
            type="text"
            name="firstName"
            value={textValue.firstName}
            onChange={onInputChange}
            onBlur={onBlur}
            placeholder="John"
          />
        </label>
        <FormError inputErrors={formErrors} nameOfInput="firstName" />
      </div>

      <div className={styles["input-field"]}>
        <label>
          Last Name
          <input
            type="text"
            name="lastName"
            value={textValue.lastName}
            onChange={onInputChange}
            placeholder="Johnson"
            onBlur={onBlur}
          />
        </label>
        <FormError inputErrors={formErrors} nameOfInput="lastName" />
      </div>

      <div className={styles["input-field"]}>
        <label>
          Birth Date
          <input
            type="date"
            name="birthDate"
            value={textValue.birthDate}
            onChange={onInputChange}
          />
        </label>
        <FormError inputErrors={formErrors} nameOfInput="birthDate" />
      </div>

      <div className={styles["input-field"]}>
        <label>
          Phone number
          <input
            type="tel"
            name="phone"
            value={textValue.phone}
            onChange={onInputChange}
            placeholder="7-7777-77-77"
          />
        </label>
        <FormError inputErrors={formErrors} nameOfInput="phone" />
      </div>

      <div className={styles["input-field"]}>
        <label>
          Your site
          <input
            type="text"
            name="site"
            maxLength="50"
            value={textValue.site}
            onChange={onInputChange}
            placeholder="https://developer.mozilla.org/"
            onBlur={onBlur}
          />
        </label>
        <FormError inputErrors={formErrors} nameOfInput="site" />
      </div>
    </div>
  );
}
