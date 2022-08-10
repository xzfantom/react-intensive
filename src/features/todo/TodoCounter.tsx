import React from 'react'
import { useSelector } from 'react-redux';
import { selectActiveTodoCount } from './todoSlice';
import style from './TodoCounter.module.css'

type Props = {
  user: string,
}

export default function TodoCounter({user}:Props) {
  const activeTodoCount = useSelector(selectActiveTodoCount);

  return (
    <span className={style.counterBadge}>
      {activeTodoCount}
    </span>
  )
}
