import { FC, useState } from 'react';
import useAppSelector from 'src/utils/useAppSelector';
import Task from '../Task/Task';
import Tabs from '../Tabs/Tabs';
import { TabSlug } from '../Tabs/Tabs';

import styles from './TaskList.module.css';

const TaskList: FC = () => {
  const { ...todos } = useAppSelector((state) => state.todoReducer.todos);
  const [activeTabSlug, setActiveTabSlug] = useState<TabSlug>('active');
  const propsForTabs = {
    activeTabSlug: activeTabSlug,
    setActiveTabSlug: setActiveTabSlug,
  };

  const allTasksArray = Object.entries(todos);

  const filteredCompletedTasksArray = allTasksArray.filter(([, todo]) => {
    return todo.isCompleted === true;
  });

  return (
    <div className={styles.taskAndTabsContainer}>
      <Tabs {...propsForTabs} />
      {activeTabSlug === 'active' && (
        <div className={styles.taskContainer}>
          {allTasksArray.map(([id, todo]) => {
            return (
              <Task key={id} id={Number(todo.id)} text={todo.text} activeTabSlug={activeTabSlug} />
            );
          })}
        </div>
      )}
      {activeTabSlug === 'completed' && (
        <div className={styles.taskContainer}>
          {filteredCompletedTasksArray.map(([id, todo]) => {
            return <Task key={id} id={Number(id)} text={todo.text} activeTabSlug={activeTabSlug} />;
          })}
        </div>
      )}
    </div>
  );
};

export default TaskList;
