import { FC, useState } from 'react';
import useAppDispatch from 'src/utils/useAppDispatch';
import Button from '../Button/Button';
import styles from './Task.module.css';

type Props = {
  id: number;
  text: string;
};

const Task: FC<Props> = (props) => {
  const [toggler, setToggler] = useState(false);
  const [isChangeable, setisChangeable] = useState(false);
  const { id, text } = props;
  const dispatch = useAppDispatch();
  const onTaskChange = () => {
    dispatch();
  };
  return (
    <>
      <div className={styles.container}>
        <input
          type="radio"
          checked={toggler}
          onClick={() => setToggler((toggler) => !toggler)}
          onChange={isChangeable ? onTaskChange : undefined}
        />
        <div>{id}</div>
        {isChangeable && <input value={text} />}
        {!isChangeable && <div>{text}</div>}

        <Button type="button" onClick={() => setisChangeable((isChangeable) => !isChangeable)}>
          {isChangeable ? 'Save' : 'Change'}
        </Button>
        <Button type="button" onClick={() => alert('click')}>
          Delete
        </Button>
      </div>
    </>
  );
};

export default Task;
