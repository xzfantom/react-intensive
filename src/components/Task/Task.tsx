import { FC, useState } from 'react';
import useAppDispatch from 'src/utils/useAppDispatch';
import Button from '../Button/Button';
import Input from '../Input/Input';
import styles from './Task.module.css';
import { TabSlug } from '../Tabs/Tabs';
import { patchTodoText, deleteTodo, changeTaskStatus } from '../../store/todoSlice';
import useToggler from '../../utils/useToggler';
import useAppSelector from 'src/utils/useAppSelector';
import editSRC from '../../assets/editIcon.png';
import deleteSRC from '../../assets/deleteIcon.png';
import saveSRC from '../../assets/saveIcon.png';

type Props = {
  id: number;
  text: string;
  activeTabSlug: TabSlug;
};

const Task: FC<Props> = (props) => {
  const dispatch = useAppDispatch();

  const { id, text, activeTabSlug } = props;
  const { isCompleted } = useAppSelector((state) => state.todoReducer.todos[id]);

  const [isChangeable, setisChangeable] = useToggler();
  const [editedValue, setEditedValue] = useState(text);

  const onTaskChange = (value: string) => {
    setEditedValue(value);
  };
  const onSaveClick = () => {
    dispatch(patchTodoText({ id: id, text: editedValue }));
    setisChangeable();
  };
  const onTaskDelete = () => {
    dispatch(deleteTodo(id));
  };
  const onTaskStatusChange = () => {
    dispatch(changeTaskStatus(id));
  };
  const isActiveTabSlugActive = activeTabSlug === 'active';
  const isCompletedTabSlugActive = activeTabSlug === 'completed';

  const completedFromActiveTabClassName = () => {
    if (isCompleted && isActiveTabSlugActive) {
      return styles.completedFromActiveTab;
    } else if (isCompletedTabSlugActive) {
      return styles.completedFromCompletedTab;
    }
  };

  const inputProps = {
    onChangeCallback: onTaskChange,
    inputValue: editedValue,
    myClassName: 'taskEditInput',
  };

  const onEditClick = () => {
    setisChangeable();
  };

  return (
    <>
      <div className={`${styles.task} ${completedFromActiveTabClassName()}`}>
        <input
          className={styles.checkbox}
          type="checkbox"
          defaultChecked={isCompleted}
          onClick={onTaskStatusChange}
        />
        {!isChangeable && <div className={styles.text}>{text}</div>}
        {isChangeable && <Input {...inputProps} />}

        {!isChangeable && (
          <Button
            myClassName="tool"
            disabled={isCompletedTabSlugActive}
            type="button"
            onClick={onEditClick}
          >
            <img src={editSRC} alt="edit" />
          </Button>
        )}
        {isChangeable && (
          <Button
            myClassName="tool"
            disabled={isCompletedTabSlugActive}
            type="button"
            onClick={onSaveClick}
          >
            <img src={saveSRC} alt="save" />
          </Button>
        )}
        <Button myClassName="tool" type="button" onClick={onTaskDelete}>
          <img src={deleteSRC} alt="delete" />
        </Button>
      </div>
    </>
  );
};

export default Task;
