import { connect } from "react-redux";
import styles from "./Header.module.css";

const Header = ({ username }) => {
  return (
    <header className={styles.header}>
      <h2>Welcome, {username}</h2>
      <p className={styles["todo_header"]}>Todo list</p>
    </header>
  );
};

const mapStateToProps = (state) => ({
  username: state.user.username.name,
});

export default connect(mapStateToProps, null)(Header);
