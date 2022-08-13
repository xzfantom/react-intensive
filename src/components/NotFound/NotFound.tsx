import styles from "./NotFound.module.css";
import { useHistory } from "react-router-dom";

const NotFound: React.FC = () => {
  const history = useHistory();

  const routeChange = () => {
    let path = "/";
    history.push(path);
  };
  return (
    <>
      <p className={styles["not_found_text"]}>404 Page not found</p>
      <button className={styles["not_found_btn"]} onClick={routeChange}>
        Go to start page
      </button>
    </>
  );
};

export default NotFound;
