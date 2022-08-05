import React from "react";
import style from "./toDoList.module.css";
import ToDoItem from "../../components/ToDoItem/ToDoItem";
import { useSelector } from "react-redux";

const ToDoList = ({ selectedStatus, setSelectedStatus }) => {
  const toDoList = useSelector((state) => state.toDoList);
  const activeTodoItems = toDoList.filter((todo) => todo.completed === false);
  const completedTodoItems = toDoList.filter((todo) => todo.completed === true);

  const handleStatusClick = (e) => {
    setSelectedStatus(e.target.name);
  };

  return (
    <div className={style.container}>
      <div className={style.content}>
        <div className={style.toDoSelectionContainer}>
          <button
            name="active"
            className={
              selectedStatus === "active"
                ? `${style.button} ${style.activeStatus}`
                : style.button
            }
            onClick={handleStatusClick}
          >
            Active
          </button>
          <button
            name="completed"
            className={
              selectedStatus === "completed"
                ? `${style.button} ${style.activeStatus}`
                : style.button
            }
            onClick={handleStatusClick}
          >
            Completed
          </button>
        </div>
        <div className={style.itemsContainer}>
          {selectedStatus === "active" &&
            activeTodoItems.map((todo) => (
              <ToDoItem key={todo.id} todoInfo={todo} />
            ))}
          {selectedStatus === "completed" &&
            completedTodoItems.map((todo) => (
              <ToDoItem key={todo.id} todoInfo={todo} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default ToDoList;
