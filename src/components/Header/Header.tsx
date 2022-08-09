import styles from "./Header.module.css";
import calculateActiveTodos from "./calculateActiveTodos/calculateActiveTodos";
import useTypedSelector from "./../../store/hooks/useTypedSelector";
import useActions from "./../../store/hooks/useActions";

const Header = () => {
  const { todos } = useTypedSelector((state) => state.todo);
  const { logout } = useActions();
  const { username } = useTypedSelector((state) => state.user);
  console.log(todos);
  
  return (
    <div className={styles.header}>
      <div>
        Пользователь: {username}
        <br />
        Активных задач: {calculateActiveTodos(todos)}
      </div>
      <div onClick={logout} className={styles.btn}>
        Выйти
      </div>
    </div>
  );
};

export default Header;
