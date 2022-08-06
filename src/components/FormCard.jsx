import { Component } from "react";
import Input from "./Input";
import TextArea from "./TextArea";
import Button from "./Button";
import styles from "./FormCard.module.css";

const defaultState = {
  name: "",
  surname: "",
  birthday: "",
  site: "",
  phone: "",
  about: "",
  stack: "",
  lastproject: "",
};

class FormCard extends Component {
  constructor(props) {
    super(props);
    this.state = defaultState;
  }

  onChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  onSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
    this.setState(defaultState);
  };
  onDelete = (event) => {
    this.setState(defaultState);
  };

  render() {
    return (
      <div className={styles.form}>
        <Input
          title="Имя"
          type="text"
          placeholder="вас зовут..."
          name="name"
          value={this.state.name}
          onChange={this.onChange}
        />
        <Input
          title="Фамиля"
          type="text"
          placeholder="и ваша фамилия..."
          name="surname"
          value={this.state.surname}
          onChange={this.onChange}
        />
        <Input
          title="Дата рождения"
          type="date"
          placeholder="вы родились..."
          name="birthday"
          value={this.state.birthday}
          onChange={this.onChange}
        />
        <Input
          title="Сайт"
          type="url"
          placeholder="тут укажите url вашего сайта..."
          name="site"
          value={this.state.site}
          onChange={this.onChange}
        />
        <Input
          title="Номер телефона"
          type="tel"
          placeholder="телефон для связи..."
          name="phone"
          value={this.state.phone}
          onChange={this.onChange}
        />
        <TextArea
          title="О себе"
          type="text"
          placeholder="расскажите немного о себе..."
          name="about"
          value={this.state.about}
          onChange={this.onChange}
        />
        <TextArea
          title="Стек технологий"
          type="text"
          placeholder="опишите технологии, которыми владеете..."
          name="stack"
          value={this.state.stack}
          onChange={this.onChange}
        />
        <TextArea
          title="Описание последнего проекта"
          type="text"
          placeholder="ваш последний проект был..."
          name="lastproject"
          value={this.state.lastproject}
          onChange={this.onChange}
        />
        <div className={styles.buttons}>
          <Button title="Сохранить" type="save" onClick={this.onSubmit} />
          <Button title="Отменить" type="cancel" onClick={this.onDelete} />
        </div>
      </div>
    );
  }
}

export default FormCard;
