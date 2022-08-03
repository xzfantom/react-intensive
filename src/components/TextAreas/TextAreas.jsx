import FormError from "../FormError";
import SymbolsCounter from "../SymbolsCounter";
import styles from "./TextAreas.module.css";

export default function TextAreas({
  textValue,
  onTextAreaChange,
  onBlur,
  formErrors,
}) {
  return (
    <div className={styles["form__text-areas"]}>
      <div className={styles["input-field"]}>
        <label>
          About Yourself
          <textarea
            type="text"
            name="about"
            rows="7"
            cols="50"
            value={textValue.about}
            onChange={onTextAreaChange}
            placeholder="Few words about yourself..."
            onBlur={onBlur}
          />
        </label>
        <SymbolsCounter fieldLength={textValue.about.length} />
        <FormError inputErrors={formErrors} nameOfInput="about" />
      </div>

      <div className={styles["input-field"]}>
        <label>
          Technologies Stack
          <textarea
            type="text"
            name="technologies"
            rows="7"
            cols="50"
            value={textValue.technologies}
            onChange={onTextAreaChange}
            placeholder="HTML5, CSS3, JavaScript..."
            onBlur={onBlur}
          />
        </label>
        <SymbolsCounter fieldLength={textValue.technologies.length} />
        <FormError inputErrors={formErrors} nameOfInput="technologies" />
      </div>

      <div className={styles["input-field"]}>
        <label>
          Last Project Description
          <textarea
            type="text"
            name="project"
            rows="7"
            cols="50"
            value={textValue.project}
            onChange={onTextAreaChange}
            placeholder="Describe your last project please"
            onBlur={onBlur}
          />
        </label>
        <SymbolsCounter fieldLength={textValue.project.length} />
        <FormError inputErrors={formErrors} nameOfInput="project" />
      </div>
    </div>
  );
}
