import styles from "./NotFound.module.css";
import { useHistory } from "react-router-dom";

const NotFound: React.FC = () => {
  const history = useHistory();
  return (
    <>
      <p className={styles["not_found_text"]}>404 Page not found</p>
      <button
        aria-label="Back to login page"
        className={styles["not_found_btn"]}
        onClick={() => {
          history.push("/");
        }}
      >
        Go to start page
      </button>
    </>
  );
};

export default NotFound;
