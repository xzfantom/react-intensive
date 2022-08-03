import styles from "./ResultForm.module.css";

export default function ResultForm({ formData }) {
  const {
    firstName,
    lastName,
    birthDate,
    phone,
    site,
    about,
    technologies,
    project,
  } = formData;

  const dateOptions = { year: "numeric", month: "long", day: "numeric" };

  return (
    <div className={styles["result-form"]}>
      <h2 className={styles["result-form__heading"]}>
        Hello, {firstName} {lastName}!
      </h2>
      <p className={styles["result-form__text"]}>
        Thank you for filling our Questionnaire. Your data is below:
      </p>
      <table className={styles["zebra-tbl"]}>
        <tbody>
          <tr className={styles["zebra-tbl-row"]}>
            <th className={styles["zebra-tbl-row-head"]}>First name</th>
            <td className={styles["zebra-tbl-row-data"]}>{firstName}</td>
          </tr>
          <tr className={styles["zebra-tbl-row"]}>
            <th className={styles["zebra-tbl-row-head"]}>Last name</th>
            <td className={styles["zebra-tbl-row-data"]}>{lastName}</td>
          </tr>
          <tr className={styles["zebra-tbl-row"]}>
            <th className={styles["zebra-tbl-row-head"]}>Birth date</th>
            <td className={styles["zebra-tbl-row-data"]}>
              {new Date(birthDate).toLocaleString("en-US", dateOptions)}
            </td>
          </tr>
          <tr className={styles["zebra-tbl-row"]}>
            <th className={styles["zebra-tbl-row-head"]}>Phone number</th>
            <td className={styles["zebra-tbl-row-data"]}>{phone}</td>
          </tr>
          <tr className={styles["zebra-tbl-row"]}>
            <th className={styles["zebra-tbl-row-head"]}>Your site</th>
            <td className={styles["zebra-tbl-row-data"]}>{site}</td>
          </tr>
          <tr className={styles["zebra-tbl-row"]}>
            <th className={styles["zebra-tbl-row-head"]}>About Yourself</th>
            <td className={styles["zebra-tbl-row-data"]}>{about}</td>
          </tr>
          <tr className={styles["zebra-tbl-row"]}>
            <th className={styles["zebra-tbl-row-head"]}>Technologies Stack</th>
            <td className={styles["zebra-tbl-row-data"]}>{technologies}</td>
          </tr>
          <tr className={styles["zebra-tbl-row"]}>
            <th className={styles["zebra-tbl-row-head"]}>
              Last Project Description
            </th>
            <td className={styles["zebra-tbl-row-data"]}>{project}</td>
          </tr>
        </tbody>
      </table>
      <button
        className={`${styles.btn} ${styles["btn-outline"]} ${styles["result-form_btn"]}`}
        type="submit"
        onClick={() => window.location.reload(false)}
      >
        Go Back
      </button>
    </div>
  );
}
