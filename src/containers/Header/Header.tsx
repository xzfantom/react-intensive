import { FC } from "react";
import { useSelector } from "react-redux";
import { RootState } from '../../store/store';
import style from "./header.module.css";

const Header: FC = () => {
  const user = useSelector((state: RootState) => state);

  const thingsToDo = () => {
    const toDoNumber = user.toDoList.filter((todo) => !todo.completed);
    return toDoNumber.length;
  };

  return (
    <div className={style.container}>
      <div className={style.content}>
        {user.name ? (
          <div className={style.wrapper}>
            <div className={style.userMessage}>Hello {user.name}!</div>
            <div className={style.activeToDoItems}>
              You have {thingsToDo()} things to do
            </div>
          </div>
        ) : (
          <div className={style.noUserMessage}>Hello friend!</div>
        )}
      </div>
    </div>
  );
};

export default Header;
