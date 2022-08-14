import { connect } from "react-redux";
import styles from "./Header.module.css";
import { RootState } from "../../redux/store";

interface IHeaderProps {
  username?: string;
  isLoggedIn?: boolean;
}

const Header: React.FC<IHeaderProps> = ({ username }) => {
  return (
    <header className={styles.header}>
      <h2>Welcome, {username}</h2>
      <p className={styles["todo_header"]}>Todo list</p>
    </header>
  );
};

const mapStateToProps = (state: RootState) => ({
  username: state.user.username.name,
});

export default connect(mapStateToProps, null)(Header);
