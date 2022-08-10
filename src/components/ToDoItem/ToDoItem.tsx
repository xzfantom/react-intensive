import { FC, useRef, useState } from 'react';
import { ToDoItem as ToDoItemInterface } from '../../types/toDoItemTypes';
import style from "./toDoItem.module.css";
import { ReactComponent as EditSVG } from "../../svg/edit-svg.svg";
import { ReactComponent as DeleteSVG } from "../../svg/delete-svg.svg";
import { ReactComponent as CircleSVG } from "../../svg/circle-svg.svg";
import { ReactComponent as DoneSVG } from "../../svg/done-svg.svg";
import { ReactComponent as OkSVG } from "../../svg/ok-button-svg.svg";
import { useDispatch } from "react-redux";
import { removeTodo, toggleCompletion, updateTodo } from "../../store/actions";

interface ToDoItemProps {
  currentTodo: ToDoItemInterface;
}

const ToDoItem: FC<ToDoItemProps> = ({ currentTodo }) => {
  const dispatch = useDispatch();
  const item = useRef<HTMLTextAreaElement>(null);
  const [value, setValue] = useState(currentTodo.todo);
  const [editing, setEditing] = useState(false);

  const handleDeleteClick = () => {
    dispatch(removeTodo(currentTodo.id));
  };

  const handleEditClick = () => {
    setEditing(true);
    if (item.current) {
      item.current.disabled = false;
      item.current.focus();
    }
  };

  const handleBlur = () => {
    dispatch(updateTodo(value, currentTodo.id));
    setEditing(false);
    if (item.current) {
      item.current.disabled = true;
    }
  };

  const handleCompletionClick = () => {
    dispatch(toggleCompletion(currentTodo.id));
  };

  return (
    <div className={style.container}>
      {currentTodo.completed ? (
        <DoneSVG
          className={`${style.svgIcon}`}
          onClick={handleCompletionClick}
        />
      ) : (
        <CircleSVG
          className={`${style.svgIcon}`}
          onClick={handleCompletionClick}
        />
      )}
      <textarea
        className={
          currentTodo.completed ? `${style.crossed} ${style.item}` : style.item
        }
        onChange={(e) => setValue(e.target.value)}
        onBlur={handleBlur}
        value={value}
        disabled={true}
        rows={1}
        ref={item}
      />
      {!editing ? (
        <EditSVG
          className={`${style.svgIcon} ${style.edit}`}
          onClick={handleEditClick}
        />
      ) : (
        <OkSVG className={`${style.svgIcon} ${style.edit}`}/>
      )}
      <DeleteSVG
        className={`${style.svgIcon} ${style.delete}`}
        onClick={handleDeleteClick}
      />
    </div>
  );
};

export default ToDoItem;
