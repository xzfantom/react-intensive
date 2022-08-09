import React from "react";
import styles from "./Tab.module.css";

interface TabProps {
  isActiveSelected: boolean;
  toggleIsActiveSelected: () => void;
}

const Tab: React.FC<TabProps> = ({
  isActiveSelected,
  toggleIsActiveSelected,
}) => {
  return (
    <>
      <div>Задачи</div>
      <div className={styles.tab}>
        <div
          onClick={isActiveSelected ? toggleIsActiveSelected : () => {}}
          className={`${!isActiveSelected && styles.selected}`}>
          активные
        </div>
        <div
          onClick={!isActiveSelected ? toggleIsActiveSelected : () => {}}
          className={`${isActiveSelected && styles.selected}`}>
          неактивные
        </div>
      </div>
    </>
  );
};

export default Tab;
