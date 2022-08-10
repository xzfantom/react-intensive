import React from 'react';
import style from './TabContainer.module.css';

type Props = {
  filter: string,
  handleChange: (filter: string) => void,
};

export default function TabContainer({filter, handleChange}: Props) {

const onFilterChange = (event:React.MouseEvent<HTMLButtonElement, MouseEvent>) => handleChange(event.currentTarget.value);

  return (
    <div className={style.container}>
      <button onClick={onFilterChange} value='active' className={filter === 'active' ? style.currentTab : style.tab}>
        Активные
      </button>
      <button onClick={onFilterChange} value='finished' className={filter === 'finished' ? style.currentTab : style.tab}>
        Выполненные
      </button>
      <button onClick={onFilterChange} value='all' className={filter === 'all' ? style.currentTab : style.tab}>
        Все
      </button>
    </div>
  )
}
