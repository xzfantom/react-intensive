import React from 'react';
import style from './QuestionResult.module.css';

class QuestionResult extends React.Component {

  render() {
    let { name,
      secondname,
      birthday,
      phone,
      website,
      about,
      technologystack,
      lastproject } = this.props.data;

    return (
      <div>
        <header className={style.appHeader}>
          <h1>{name} {secondname}</h1>
        </header>
        <div className={style.wrapper}>
          <table>
            <tbody>
              <tr>
                <td>Дата рождения:</td>
                <td>{birthday}</td>
              </tr>
              <tr>
                <td>Телефон:</td>
                <td>{phone}</td>
              </tr>
              <tr>
                <td>Сайт:</td>
                <td>{website}</td>
              </tr>
              <tr>
                <td>О себе:</td>
                <td>{about}</td>
              </tr>
              <tr>
                <td>Стек технологий:</td>
                <td>{technologystack}</td>
              </tr>
              <tr>
                <td>Описание последнего проекта: </td>
                <td>{lastproject}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

export default QuestionResult;