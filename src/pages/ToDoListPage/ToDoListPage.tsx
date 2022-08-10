import { useState, FC } from "react";
import ToDoList from "../../containers/ToDoList/ToDoList";
import { RootState } from "../../store/store";
import { SelectedStatus } from "../../types/selectedStatusEnum";
import style from "./toDoListPage.module.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../../store/actions";

const ToDoListPage: FC = () => {
  const user = useSelector((state: RootState) => state);
  const dispatch = useDispatch();
  const [toDoInputValue, setToDoInputValue] = useState("");
  const [selectedStatus, setSelectedStatus] = useState(SelectedStatus.ACTIVE);
  const [error, setError] = useState(false);

  const handleToDoSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    if (toDoInputValue.trim()) {
      const newTodo = {
        todo: toDoInputValue,
        completed: false,
        id: Date.now(),
      };

      dispatch(addTodo(newTodo));
      setToDoInputValue("");
      setSelectedStatus(SelectedStatus.ACTIVE);
      setError(false);
    } else {
      setError(true);
    }
  };

  return (
    <div className={style.container}>
      {user.name ? (
        <div className={style.content}>
          <form className={style.form} onSubmit={handleToDoSubmit}>
            <label htmlFor="todoInput" className={style.label}>
              New Todo
            </label>
            <div className={style.action}>
              <input
                id="todoInput"
                className={style.input}
                type="text"
                value={toDoInputValue}
                onChange={(e) => setToDoInputValue(e.target.value)}
                placeholder="type in new todo item"
              />
              <button className={style.button} type="submit">
                Add Todo
              </button>
            </div>
            {error && <div className={style.error}>Todo can't be empty</div>}
          </form>
          <ToDoList
            selectedStatus={selectedStatus}
            setSelectedStatus={setSelectedStatus}
          />
        </div>
      ) : (
        <div className={style.goRegisterBlock}>
          You are not registered, please go{" "}
          <Link to={"/registration"}>register</Link> first.
        </div>
      )}
    </div>
  );
};

export default ToDoListPage;
