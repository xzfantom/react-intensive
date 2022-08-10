import React, { useState } from 'react';
import style from './TodoItem.module.css';
import imgSave from './images/saveTodo.png';
import imgEdit from './images/editTodo.png';
import imgRemove from './images/removeTodo.png';


type Props = {
  id: number,
  data: string,
  done: boolean,
  toggleFinished: (id: number) => void,
  handleItemEdited: (id: number, data: string) => void,
  handleItemDeleted: (id: number) => void
}

export default function TodoItem(props: Props) {
  const [disabled, setDisabled] = useState(true);
  const [value, setValue] = useState(props.data);

  const onEditBtnClick = () => {
    if (!value) {
      return;
    }
    if (!disabled) {
      props.handleItemEdited(props.id, value);
    }
    setDisabled(!disabled);    
  }

  const onRemoveBtnClick = () => {
    props.handleItemDeleted(props.id);
  }

  const onInputClick = () => {
    if (disabled) {
      props.toggleFinished(props.id);
    }
  }

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => setValue(event.target.value);

  const onKeyUp = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      onEditBtnClick();
    }
  }

  return (
    <li className={style.li}>
      <span onClick={onInputClick}>
        <input 
          value={value} 
          disabled={disabled} 
          className={props.done ? style.finished : ''}        
          onChange={onInputChange}
          onKeyUp={onKeyUp}
        />
      </span>
      <span>
      <img src={disabled ? imgEdit : imgSave} className={style.btn} onClick={onEditBtnClick} alt='Сохранить'/>
      <img src={imgRemove} className={style.btn} onClick={onRemoveBtnClick} alt='Удалить'/>
      </span>
    </li>
  )
}
