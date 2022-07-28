import React from 'react';
import styles from './App.module.css';
import Input from './Input';
import Button from './Button';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      family_name: '',
      date_of_birth: '',
      tel: '',
      web_site: '',
      about: '',
      skills: '',
      last_proj_description: '',
    };
  }

  initialState = {
    name: '',
    family_name: '',
    date_of_birth: '',
    tel: '',
    web_site: '',
    about: '',
    skills: '',
    last_proj_description: '',
  };

  onChange = (event) => {
    console.log(event.target.name);
    this.setState({ [event.target.name]: event.target.value });
  };
  handleFormReset = () => {
    this.setState(() => this.initialState);
  };
  handleSubmit = (event) => {
    event.preventDefault();
    event.target.reset();
    alert('submitted');
  };
  render() {
    return (
      <div>
        <div className={styles.headingWrapper}>
          <h1>Создание анкеты</h1>
        </div>
        <section>
          <form
            onSubmit={this.handleSubmit}
            onReset={this.handleFormReset}
            className={styles.formWrapper}
          >
            <div className={styles.groupedInputsWrapper}>
              <Input
                inputLabel="Имя"
                name="name"
                type="text"
                onChange={this.onChange}
                value={this.state.name}
              />
              <Input
                inputLabel="Фамилия"
                name="family_name"
                type="text"
                onChange={this.onChange}
                value={this.state.family_name}
              />
              <Input
                inputLabel="Дата рождения"
                name="date_of_birth"
                type="date"
                onChange={this.onChange}
                value={this.state.date_of_birth}
              />
              <Input
                inputLabel="Телефон"
                name="tel"
                type="tel"
                onChange={this.onChange}
                value={this.state.tel}
              />
              <Input
                inputLabel="Сайт"
                name="web_site"
                type="url"
                onChange={this.onChange}
                value={this.web_site}
              />
              <Input
                inputLabel="О себе"
                name="about"
                type="text"
                isTextArea={true}
                onChange={this.onChange}
                value={this.state.about}
              />
              <Input
                inputLabel="Стек технологий"
                name="skills"
                type="text"
                isTextArea={true}
                onChange={this.onChange}
                value={this.state.skills}
              />
              <Input
                inputLabel="Описание последнего проекта"
                name="last_proj_description"
                type="text"
                isTextArea={true}
                onChange={this.onChange}
                value={this.state.last_proj_description}
              />
            </div>
            <div className={styles.buttonWrapper}>
              <Button type="reset" buttonName="Отменить" />
              <Button type="submit" buttonName="Сохранить" />
            </div>
          </form>
        </section>
      </div>
    );
  }
}

export default App;
