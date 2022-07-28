import React, { Component } from "react";
import TextInput from "./components/TextInput";
import TextAreaInput from "./components/TextAreaInput";
import Button from "./components/Button";
import styles from "./App.module.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.defaultState = {
    name: "", surname: "", birthdate: "", telephone: "", 
    site: "", personalInfo: "", stack: "", project: ""};
    this.state = this.defaultState;
    this.handleChange = this.handleChange.bind(this);
    this.handleClear = this.handleClear.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({
        ...this.state,
        [name]: value,
      })
  }

  handleClear() {
    this.setState(this.defaultState);
  }

  handleSubmit() {
      console.log(this.state)
  }

  render() {
    const inputArray = [
      {name: "name", label: "Имя"}, 
      {name: "surname", label: "Фамилия"}, 
      {name: "birthdate", label: "Дата рождения"}, 
      {name: "telephone", label: "Телефон"}, 
      {name: "site", label: "Сайт"}]

    const textAreaArray = [
      {name: 'personalInfo', label: 'О себе'},
      {name: 'stack', label: 'Стек технологий'},
      {name: 'project', label: 'Описание последнего проекта'}]

    return (
      <div className={styles.form}>
        <h1>Создание анкеты</h1>
        {inputArray.map(({name, label}, i) => (
          <TextInput
            label={label}
            value={this.state[name]}
            name={name}
            key={name + i}
            onChange={this.handleChange}/>
        ))}

        {textAreaArray.map(({name, label}, i) => 
          <TextAreaInput 
            key={name + i}
            label={label}
            name={name}
            value={this.state[name]}
            onChange={this.handleChange}/>)
        }
        <Button value="Сохранить" handleClick={this.handleSubmit} />
        <Button value="Отменить" handleClick={this.handleClear} />
      </div>
    );
  }
}

export default App;