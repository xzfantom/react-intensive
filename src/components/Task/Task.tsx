import { FC } from 'react';
import useAppDispatch from 'src/utils/useAppDispatch';
import Button from '../Button/Button';
import Input from '../Input/Input';
import styles from './Task.module.css';
import { TabSlug } from '../Tabs/Tabs';
import { patchTodoText, deleteTodo, changeTaskStatus } from '../../store/todoSlice';
import useToggler from '../../utils/useToggler';
import useAppSelector from 'src/utils/useAppSelector';
import editSRC from './editIcon.png';
import deleteSRC from './deleteIcon.png';
import saveSRC from './saveIcon.png';

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

  const onTaskChange = (value: string) => {
    dispatch(patchTodoText({ id: id, text: value }));
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
    }
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
        {isChangeable && (
          <Input
            myClassName="taskEditInput"
            onChangeCallback={onTaskChange}
            //  @ts-ignore
            inputValue={text}
          />
        )}
        {!isChangeable && <div className={styles.text}>{text}</div>}

        <Button
          myClassName="tool"
          disabled={isCompletedTabSlugActive}
          type="button"
          onClick={typeof setisChangeable != 'boolean' ? () => setisChangeable() : () => {}}
        >
          {isChangeable && <img src={saveSRC} alt="save" />}
          {!isChangeable && <img src={editSRC} alt="edit" />}
        </Button>
        <Button myClassName="tool" type="button" onClick={() => onTaskDelete()}>
          <img src={deleteSRC} alt="delete" />
        </Button>
      </div>
    </>
  );
};

export default Task;
