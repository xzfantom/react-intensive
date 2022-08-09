import { FC } from "react";
import { RootState } from '../../store/store';
import { SelectedStatus } from '../../types/selectedStatusEnum';
import style from "./toDoList.module.css";
import ToDoItem from "../../components/ToDoItem/ToDoItem";
import { useSelector } from "react-redux";

interface ToDoListProps {
  selectedStatus: SelectedStatus;
  setSelectedStatus: (name: SelectedStatus) => void;
}

const ToDoList: FC<ToDoListProps> = ({ selectedStatus, setSelectedStatus }) => {
  const toDoList = useSelector((state: RootState) => state.toDoList);
  const activeTodoItems = toDoList.filter((todo) => !todo.completed);
  const completedTodoItems = toDoList.filter((todo) => todo.completed);

  return (
    <div className={style.container}>
      <div className={style.content}>
        <div className={style.toDoSelectionContainer}>
          <button
            className={
              selectedStatus === SelectedStatus.ACTIVE
                ? `${style.button} ${style.activeStatus}`
                : style.button
            }
            onClick={() => setSelectedStatus(SelectedStatus.ACTIVE)}
          >
            Active
          </button>
          <button
            className={
              selectedStatus === SelectedStatus.COMPLETED
                ? `${style.button} ${style.activeStatus}`
                : style.button
            }
            onClick={() => setSelectedStatus(SelectedStatus.COMPLETED)}
          >
            Completed
          </button>
        </div>
        <div className={style.itemsContainer}>
          {selectedStatus === SelectedStatus.ACTIVE
            ? (
              activeTodoItems.map((todo) => (
                <ToDoItem key={todo.id} currentTodo={todo} />
              ))
            ) : (
              completedTodoItems.map((todo) => (
                <ToDoItem key={todo.id} currentTodo={todo} />
              ))
            )
          }
        </div>
      </div>
    </div>
  );
};

export default ToDoList;
