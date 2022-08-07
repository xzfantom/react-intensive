import { Dispatch, FC, SetStateAction } from 'react';
import styles from './Tabs.module.css';

export type TabSlug = 'active' | 'completed';

type Props = {
  activeTabSlug: TabSlug;
  setActiveTabSlug: Dispatch<SetStateAction<TabSlug>>;
};

const Tabs: FC<Props> = (props) => {
  const { activeTabSlug, setActiveTabSlug } = props;

  const activeCalss = () => {
    if (activeTabSlug === 'active') {
      return styles.highlited;
    } else {
      return styles.normal;
    }
  };
  const completedClass = () => {
    if (activeTabSlug === 'completed') {
      return styles.highlited;
    } else {
      return styles.normal;
    }
  };
  return (
    <div className={styles.container}>
      <div
        className={`${styles.tab} ${activeCalss()}`}
        onClick={() => {
          setActiveTabSlug('active');
        }}
      >
        Active
      </div>
      <div
        className={`${styles.tab} ${completedClass()}`}
        onClick={() => {
          setActiveTabSlug('completed');
        }}
      >
        Completed
      </div>
    </div>
  );
};

export default Tabs;
