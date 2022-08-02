import React from 'react';
import style from './QuestionResult.module.css';

const captions = {
  birthday: 'Дата рождения',
  phone: 'Телефон',
  website: 'Сайт',
  about: 'О себе',
  technologystack: 'Стек технологий',
  lastproject: 'Описание последнего проекта'
}

export default function QuestionResult(props) {
  let { name,
    secondname,
    ...data } = props.data;

  const dateBirthday = new Date(data.birthday);
  data.birthday = dateBirthday.toLocaleDateString('ru-RU');
  const children = [];
  for (const [key, value] of Object.entries(data)) {
    children.push(<tr><td>{captions[key]}</td><td>{value}</td></tr>)
  }

  return (
    <div>
      <header className={style.appHeader}>
        <h1>{name} {secondname}</h1>
      </header>
      <div className={style.wrapper}>
        <table>
          <tbody>
            {children}
          </tbody>
        </table>
      </div>
    </div>
  )
}
